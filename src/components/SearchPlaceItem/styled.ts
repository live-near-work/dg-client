import styled from 'styled-components';

import { borderless } from 'styles/common';
import typography from 'styles/typography';

export const SearchItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 4px;
  padding: 10px 20px;

  &:hover {
    background: #f1f1f1;
  }
`;

export const SearchItemContent = styled.div<{ $isClose?: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  width: ${({ $isClose }) => ($isClose ? 'calc(100% - 30px)' : '100%')};

  > .title {
    ${typography.body2};
    color: #25282b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    > .icon {
      margin-right: 6px;

      > svg {
        padding-top: 2px;
      }
    }

    > .placeName {
      b {
        ${typography.title3};
        color: #308dff;
      }
    }
  }

  > .address {
    ${typography.body3};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #6d757e;
  }
`;

export const CloseIcon = styled.button`
  ${borderless};
  display: flex;
  background-color: transparent;
  cursor: pointer;
`;
