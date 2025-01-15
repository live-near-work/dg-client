'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

import IOSShareIcon from 'svg/ios-share.svg';

import * as S from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, disabled = false }: ButtonProps) => {
  return (
    <S.DefaultButton disabled={disabled}>
      <div>{children}</div>
    </S.DefaultButton>
  );
};

export const ShareButton = ({ children }: ButtonProps) => {
  return (
    <S.RoundedButton>
      <IOSShareIcon />
      <div>{children}</div>
    </S.RoundedButton>
  );
};
