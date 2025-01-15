import React, { FC, SVGProps } from 'react';

import * as S from './styled';

export interface SegmentItem {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
}

interface SegmentedControlProps<T> {
  items: T[];
  selectedItem: T;
  setItem: (value: T) => void;
}

export default function SegmentedControl<T extends SegmentItem>({
  items,
  selectedItem,
  setItem,
}: SegmentedControlProps<T>) {
  return (
    <S.SegmentedControl>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <S.SegmentOption
            key={index}
            $isSelected={selectedItem === item}
            onClick={() => setItem(item)}
          >
            <S.SegmentOptionIcon $isSelected={selectedItem === item}>
              <Icon />
            </S.SegmentOptionIcon>
            <span>{item.label}</span>
          </S.SegmentOption>
        );
      })}
    </S.SegmentedControl>
  );
}
