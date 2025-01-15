import styled from 'styled-components';

import { borderless } from 'styles/common';
import typography from 'styles/typography';

export const Chip = styled.button`
  ${borderless};
  ${typography.body2};
  background-color: unset;
  padding: 6px 16px;
  border: 1px solid #e0e2e4;
  border-radius: 100px;
  cursor: pointer;
  text-wrap: nowrap;
`;
