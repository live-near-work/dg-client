'use client';

import styled from 'styled-components';

import { borderless } from 'styles/common';
import typography from 'styles/typography';

interface LandingTextProps {
  size?: keyof typeof typography;
}

export const LandingText = styled.div<LandingTextProps>`
  ${borderless};
  width: 100%;
  height: fit-content;
  text-align: center;

  > .title {
    ${props => typography[props.size ?? 'body1']}
    color: ${props => !props.size && 'rgba(0, 0, 0, 0.60)'}
`;
