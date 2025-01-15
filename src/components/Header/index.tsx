'use client';

import { FC, ReactNode } from 'react';

import BackIcon from 'svg/back-icon.svg';
import CloseIcon from 'svg/close-icon.svg';
import Logo from 'svg/logo.svg';

import * as S from './styled';

interface HeaderProps {
  children: ReactNode;
  underline?: boolean;
}

export const HeaderLogo = ({ children }: { children?: ReactNode }) => {
  return (
    <S.HeaderLogo href={'/'}>
      <Logo />
      {children && <span className={'logoText'}>{children}</span>}
    </S.HeaderLogo>
  );
};

export const HeaderPage = ({ children }: { children: ReactNode }) => {
  return <S.HeaderPage>{children}</S.HeaderPage>;
};

export const HeaderClose = () => {
  return (
    <S.HeaderClose>
      <CloseIcon />
    </S.HeaderClose>
  );
};

export const HeaderBack = () => {
  return (
    <S.HeaderBack onClick={() => history.back()}>
      <BackIcon />
    </S.HeaderBack>
  );
};

export const Header: FC<HeaderProps> = ({ children, underline }) => {
  return <S.Header underline={underline}>{children}</S.Header>;
};
