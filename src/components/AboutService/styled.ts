'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { contents_box, prevent_click_box } from 'styles/common';
import typography from 'styles/typography';

export const AboutService = styled(Link)`
  ${contents_box};
  ${prevent_click_box};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7.5px 10px;
  background-color: #f4f5f6;
  text-decoration: unset;
`;

export const LearnMore = styled.div`
  display: flex;
  gap: 6px;

  > .learn-more-text {
    ${typography.body3}
    display: flex;
    align-items: center;
    text-align: center;
    color: #25282b;
  }
`;
