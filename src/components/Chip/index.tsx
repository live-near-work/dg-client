import * as React from 'react';

import * as S from './styled';

interface ChipProps {
  children: React.ReactNode;
}

export function Chip({ children }: ChipProps) {
  return <S.Chip>{children}</S.Chip>;
}
