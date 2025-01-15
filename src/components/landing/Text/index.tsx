'use client';

import React from 'react';

import typography from 'styles/typography';

import * as S from './styled';

interface TextProps {
  size?: keyof typeof typography;
  children: React.ReactNode;
}

export const Text = ({ children, ...props }: TextProps) => {
  return (
    <S.LandingText {...props}>
      <div className={'title'}>{children}</div>
    </S.LandingText>
  );
};
