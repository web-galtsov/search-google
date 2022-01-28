import React from 'react';
import { NavLink } from 'react-router-dom';
import {VscSearch} from 'react-icons/vsc';
import {IoNewspaperOutline} from 'react-icons/io5';
import {ImImage} from 'react-icons/im';
import {MdOutlineVideoCameraFront} from 'react-icons/md';
import styled from 'styled-components';

const TextIcons = styled.div`
  display: flex;
  width: 100%;
  position: relative;
 justify-content: center;
  background-color: #eaedf3;
  padding: 5px 0;
  transition: 250ms all ease-in-out;
  color: black;
  a {
    margin: 0 5px;
  }
  &&:hover {
    color: #fff;
    background-color: #4285F4;
    transition: 300ms all ease-in-out;
  }
`;
const links = [
  {
    url: '/search',
    text: 'All',
    icons: <VscSearch style={{marginRight: '5px', marginTop: '5px'}}/>
  },
  {
    url: '/news',
    text: 'News',
    icons: <IoNewspaperOutline style={{marginRight: '5px', marginTop: '5px'}}/>
  },
  {
    url: '/images',
    text: 'Images',
    icons: <ImImage style={{marginRight: '5px', marginTop: '5px'}}/>
  },
  {
    url: '/videos',
    text: 'Videos',
    icons: <MdOutlineVideoCameraFront style={{marginRight: '5px', marginTop: '5px'}}/>
  },
];

export const Links = () => (
  <div className="grid grid-cols-4 gap-2 content-start mt-5 rounded-full ">
    {links.map(({ url, icons, text }) => (
      <NavLink to={url} activeClassName="rounded-full w-40 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 ease-linear ease-linear transition-all duration-150 hover:text-white active:bg-blue-600">
        <TextIcons className="gap-2 rounded-full">{icons}{text}</TextIcons>
      </NavLink>
    ))}
  </div>
);
