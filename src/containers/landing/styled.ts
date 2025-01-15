import styled from 'styled-components';

import { flex_column, flex_center, header_height } from 'styles/common';

export const PageWrapper = styled.div`
  ${flex_column};
  padding: ${header_height};
  height: 100vh;
  overflow-y: auto;
`;

export const Main = styled.main`
  ${flex_column};
  background-color: #fff;
`;

export const ContentContainer = styled.div`
  ${flex_column};
  ${flex_center};
  height: fit-content;
  padding: 48px 36px 70px 36px;
  gap: 32px 0px;
`;

export const TextContainer = styled.div`
  ${flex_column};
  ${flex_center};
  gap: 16px 0px;
`;

export const Bottom = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  bottom: 0;
  padding: 8px 20px 12px 20px;
`;

export const LandingFooter = styled.footer`
  background: #f3f3f3;
  width: 100%;
  height: 257px;
  padding: 20px 0;
  flex-shrink: 0;
`;
