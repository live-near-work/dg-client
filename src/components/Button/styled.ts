import styled from 'styled-components';

import { flex_center, borderless } from 'styles/common';
import typography from 'styles/typography';

export const DefaultButton = styled.button<{ disabled: boolean }>`
  ${borderless};
  ${typography.title2};
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  color: ${({ disabled }) => (disabled ? '#26292c80' : 'white')};
  background-color: ${({ disabled }) => (disabled ? '#E0E2E4' : '#1ca1ff')};
  cursor: pointer;
`;

export const RoundedButton = styled.button`
  ${flex_center};
  ${borderless};
  ${typography.title2};
  padding: 8px;
  border-radius: 100px;
  background: #b4b4b4;
`;
