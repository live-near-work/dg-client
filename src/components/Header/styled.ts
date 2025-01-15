'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { flex_center, header_height, prevent_click_box } from 'styles/common';
import typography from 'styles/typography';

export const HeaderLogo = styled(Link)`
  ${prevent_click_box};
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: unset;

  span.logoText {
    ${typography.title2}
    text-decoration: unset;
    color: black;
  }
`;

export const HeaderClose = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background-color: white;
`;

export const HeaderBack = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
`;

export const HeaderPage = styled.div`
  ${typography.title1}
  ${flex_center};
  position: absolute;
  left: 0px;
  width: 100%;
  pointer-events: none;
`;

export const Header = styled.header<{ underline?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${header_height};
  background-color: white;
  padding: 8px 20px;
  box-shadow: ${({ underline = true }) => (underline ? 'inset 0 -1px 0 #E0E2E4' : 'none')};
`;
