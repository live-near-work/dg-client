'use client';

import styled from 'styled-components';

import { borderless } from 'styles/common';

interface GraphicAreaProps {
  height?: string;
}

export const GraphicArea = styled.div<GraphicAreaProps>`
  ${borderless};
  padding-top: 32px;
  background: #d9d9d9;
  width: 100%;
  height: ${props => props.height ?? '280px'};
`;
