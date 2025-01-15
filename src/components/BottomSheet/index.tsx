import { AnimatePresence } from 'framer-motion';
import React from 'react';

import CheckIcon from 'svg/check-icon.svg';
import CloseIcon from 'svg/close-icon-bottom-sheet.svg';

import * as S from './styled';

interface BottomSheetProps<T> {
  title: string;
  items: T[];
  selectedItem: T;
  setItem: (value: T) => void;
  onClose: () => void;
}

export default function BottomSheet<T>({
  title,
  items,
  selectedItem,
  setItem,
  onClose,
}: BottomSheetProps<T>) {
  const ItemClickHandler = (item: T) => {
    setItem(item);
    onClose();
  };

  return (
    <AnimatePresence>
      <S.Backdrop
        key="bottom-sheet-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <S.Sheet
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 50, stiffness: 500 }}
      >
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseButton onClick={onClose} aria-label="Close">
            <CloseIcon />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          {items.map((item, index) => (
            <S.Item
              key={index}
              onClick={() => ItemClickHandler(item)}
              $isSelected={selectedItem === item}
            >
              <span>{String(item)}</span>
              <S.CheckIcon $isSelected={selectedItem === item}>
                <CheckIcon />
              </S.CheckIcon>
            </S.Item>
          ))}
        </S.Content>
        <S.ExtraSpace />
      </S.Sheet>
    </AnimatePresence>
  );
}
