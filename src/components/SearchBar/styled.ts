import styled from 'styled-components';

import { borderless, header_height, prevent_click_box } from 'styles/common';
import typography from 'styles/typography';

export const SearchBack = styled.button`
  ${prevent_click_box};
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  ${typography.body1};
  ${borderless};
  width: 100%;
`;

export const SearchClear = styled.button`
  ${borderless};
  background-color: white;
  cursor: pointer;
`;

export const SearchBar = styled.header<{ underline?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${header_height};
  background-color: white;
  padding: 8px 20px;
  box-shadow: ${({ underline = true }) => (underline ? 'inset 0 -1px 0 #E0E2E4' : 'none')};
`;
