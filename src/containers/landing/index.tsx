'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Button, ShareButton } from 'components/Button';
import { Header, HeaderLogo } from 'components/Header';
import { Graphic } from 'components/landing/Graphic';
import { Text } from 'components/landing/Text';

import * as S from './styled';

export default function Landing() {
  const router = useRouter();

  const sendToHome = () => {
    router.push('/');
  };

  return (
    <div>
      <Header>
        <HeaderLogo>동그리미</HeaderLogo>
      </Header>
      <S.PageWrapper>
        <S.Main>
          <S.ContentContainer>
            <S.TextContainer>
              <Text size="title1">집 구하기 좁은 시작</Text>
              <Text size="headline1">
                동네 탐구 리포트
                <br />
                호시탐탐
              </Text>
            </S.TextContainer>
            <Graphic />
          </S.ContentContainer>
          <S.ContentContainer>
            <S.TextContainer>
              <Text size="headline2">
                직주근접, 하고 싶어도
                <br />
                너무 비싸잖아요.
              </Text>
              <Text>
                가나다라마바사
                <br />
                가나다라마바사
              </Text>
            </S.TextContainer>
            <Graphic />
          </S.ContentContainer>
          <S.ContentContainer>
            <S.TextContainer>
              <Text size="headline1">
                유니콘을 발견할 수 있는
                <br />
                동네를 찾아드릴게요.
              </Text>
              <Text>
                집이 모여 있는 동네부터 찾아서
                <br />
                선택지를 좁혀드려요.
              </Text>
            </S.TextContainer>
            <Graphic height="200px" />
            <Graphic height="200px" />
          </S.ContentContainer>
          <S.ContentContainer>
            <S.TextContainer>
              <Text>이사를 고민하는 친구에게</Text>
              <ShareButton>공유하기</ShareButton>
            </S.TextContainer>
          </S.ContentContainer>
          <S.Bottom>
            <Button onClick={sendToHome}>시작하기</Button>
          </S.Bottom>
        </S.Main>
        <S.LandingFooter>
          <S.TextContainer>
            <Text size="title1">Footer 영역</Text>
          </S.TextContainer>
        </S.LandingFooter>
      </S.PageWrapper>
    </div>
  );
}
