import { useState } from 'react';

import { useDebounce } from 'hooks/useDebounce';
import BackIcon from 'svg/back-icon.svg';
import ClearIcon from 'svg/clear-icon.svg';
import { PlaceReqType } from 'types/place';

import * as S from './styled';

interface SearchBarProps {
  searchAction: (searchData: PlaceReqType) => void;
  onClear: () => void;
  placeholder: string;
}

export const SearchBar = ({ searchAction, onClear, placeholder }: SearchBarProps) => {
  const [text, setText] = useState<string>('');

  const debouncedSearch = useDebounce((value: string) => {
    searchAction({ text: value, display: 15 });
  }, 300);

  const handleSearch = (value: string) => {
    setText(value);
    debouncedSearch(value);
  };

  return (
    <S.SearchBar>
      <S.SearchBack onClick={() => history.back()}>
        <BackIcon />
      </S.SearchBack>
      <S.SearchInput
        value={text}
        onChange={e => handleSearch(e.target.value)}
        placeholder={placeholder}
      />
      <S.SearchClear
        onClick={() => {
          onClear();
          setText('');
        }}
      >
        <ClearIcon />
      </S.SearchClear>
    </S.SearchBar>
  );
};
