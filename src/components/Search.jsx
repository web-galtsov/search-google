import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useStateContext } from '../contexts/StateContextProvider';
import { Links } from './Links';
import styled from 'styled-components';

const SearchSection = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  max-width: 700px;
`;
const Form = styled.form`
  width: 100%;
  position: relative;
`;

export const Search = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('The Addams Family | MGM');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
      <SearchSection className = "flex items-center justify-between">
          <Form className="group relative">
              <svg width="20" height="20" fill="currentColor"
                   className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                   aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
              </svg>
              <input
                  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  aria-label="Search Goggle or type URL"
                  placeholder="Search Goggle or type URL"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
              />
              {text !== '' && (
                  <button type="button" className="absolute top-1.1 right-4 line-height-1.23 text-2xl text-gray-400 " onClick={() => setText('')}>
                      x
                  </button>
              )}
          </Form>
          <Links />
      </SearchSection>
  );
};
