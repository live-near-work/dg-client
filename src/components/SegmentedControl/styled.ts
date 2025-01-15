import styled from 'styled-components';

import colors from 'styles/color';
import { borderless, prevent_click_box } from 'styles/common';
import typography from 'styles/typography';

export const SegmentedControl = styled.div`
  display: flex;
`;
export const SegmentOption = styled.button<{ $isSelected?: boolean }>`
  ${({ $isSelected }) => ($isSelected ? typography.title3 : typography.body2)}
  ${borderless};
  ${prevent_click_box};
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#f4f5f6' : 'unset')};
  padding: 6px 12px;
  border-radius: 100px;
  cursor: pointer;
  color: ${({ $isSelected }) => ($isSelected ? colors.primary : 'inherit')};

  > span {
    text-wrap: nowrap;
  }
`;

export const SegmentOptionIcon = styled.span<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;

  > svg {
    fill: ${({ $isSelected }) => ($isSelected ? colors.primary : '#25282B')};
  }
`;
