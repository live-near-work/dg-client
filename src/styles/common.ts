'use client';

import { css } from 'styled-components';

export const flex_center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flex_column = css`
  display: flex;
  flex-direction: column;
`;

export const header_height = '48px';

export const contents_box = css`
  border-radius: 6px;
`;

export const prevent_click_box = css`
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const borderless = css`
  outline: none;
  border: none;
`;
