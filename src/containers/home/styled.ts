import styled from 'styled-components';

import {
  contents_box,
  flex_column,
  header_height,
  borderless,
  prevent_click_box,
} from 'styles/common';
import typography from 'styles/typography';

export const Main = styled.main`
  ${flex_column};
  padding-top: ${header_height};
  height: 100vh;
  background-color: white;
`;

export const CommuteTimeSelect = styled.button`
  ${borderless};
  ${prevent_click_box};
  ${typography.headline3};
  display: flex;
  align-items: center;
  font-family: inherit;
  background-color: unset;
  border-bottom: 1.5px solid #25282b;
  padding-left: 6px;
  cursor: pointer;
`;

export const HomeContainer = styled.div`
  height: 100%;
  background-color: white;
  padding: 16px 20px;
`;

export const CommuteTime = styled.div`
  ${contents_box};
  margin-top: 14px;
  border-radius: 8px;

  > .commute-time-wrapper {
    ${typography.headline3}
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #25282b;

    > .select-time-title {
      display: flex;
      gap: 6px;
    }
  }
`;

export const CommuteMethod = styled.div`
  margin-top: 16px;
`;

export const SearchCompany = styled.button<{ $isSearched: string | null }>`
  ${borderless};
  ${prevent_click_box};
  ${typography.body1};
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: 24px;
  background-color: unset;
  padding: 8px;
  border-bottom: 1px solid #e0e2e4;
  cursor: pointer;
  color: ${({ $isSearched }) => ($isSearched ? '#12161a' : '#868c94')};

  > .myCompanyLocation {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: start;
  }
`;

export const SearchCompanyModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const SearchButton = styled.div`
  margin-top: 24px;
`;

export const BottomSheet = styled.div`
  position: absolute;
`;
