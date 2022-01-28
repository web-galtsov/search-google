import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';
import styled from 'styled-components';

const LogoSection = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }
  .btn {
    position: absolute;
    right: 10px;
    left: auto;
    
  }
`;

const InputStyle = styled.div`
  input:checked ~ .dot {
    transform: translateX(132%);
    background-color: #fff;
    input:checked ~ svg {
      margin-top: 10px;
    }
  }
  input:checked ~ .block {
   background-color: #334155;
  }
 `;

export const Navbar = ({ setDarkTheme, darkTheme }) => (
      <div className="container mx-auto">
         <LogoSection>
             <InputStyle className="flex i justify-end w-full absolute">
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                   <div className="relative w-20">
                      <input
                             type="checkbox"
                             id="toggleB"
                             className="sr-only w-20"
                             onClick={() => setDarkTheme(!darkTheme)}
                       />
                             <div className= "block bg-blue-500  relative w-20 h-9 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none  text-cyan-200 focus-visible:ring-cyan-600">
                                {!darkTheme ?
                                   <svg width="24" height="24" fill="none" aria-hidden="true" style={{right: '0',  marginRight: '4px', position: 'absolute', top: '5px'}}
                                        className="ml-5.5  transform transition-transform scale-100 duration-300 ">
                                      <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                                            fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                   </svg>
                                          :
                                   <svg width="24" height="24" fill="none" aria-hidden="true" style={{left: '0',  marginLeft: '4px', position: 'absolute', top: '5px'}}
                                         className="transform transition-transform scale-100 duration-300" >
                                      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"  stroke-linejoin="round"/>
                                   </svg>
                                }
                             </div>
                                  <div className="dot absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform">
                                      {!darkTheme ?
                                          <svg width="24" height="24" fill="none" aria-hidden="true" style={{right: '0',  marginRight: '4px', position: 'absolute'}}
                                                className="flex-none transition duration-500 transform text-blue-500 opacity-100 scale-100">
                                                      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                      <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                               :
                                          <svg width="24" height="24" fill="none" aria-hidden="true" style={{left: '0',  marginLeft: '4px', position: 'absolute'}}
                                               className="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-100 scale-100">
                                                <path  d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
                                                          fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                      }
                                  </div>
                             </div>
                          </label>
             </InputStyle>
              <Link to="/">
                 <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'  alt='google-logo'/>
              </Link>
             <Search />
         </LogoSection>
      </div>
);
