import styled from 'styled-components';

import { borderless, flex_column, header_height } from 'styles/common';
import typography from 'styles/typography';

export const Main = styled.main`
  ${flex_column};
  padding-top: ${header_height};
  height: 100vh;
  background-color: white;
`;

export const Contents = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SearchList = styled.ul``;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const Title = styled.h5`
  ${typography.title2};
`;

export const ChipWrapper = styled.div`
  display: flex;
  gap: 6px;
  padding: 0px 20px;
  overflow: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DeleteAll = styled.button`
  ${borderless};
  ${typography.body2};
  background-color: unset;
  color: #6d757e;
  cursor: pointer;
`;
