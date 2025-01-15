'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

import { Chip } from 'components/Chip';
import { SearchBar } from 'components/SearchBar';
import { SearchPlaceItem } from 'components/SearchPlaceItem';
import { MOST_SEARCHED_PLACE, RECENTLY_SEARCH } from 'constants/search';
import { UseSearchPlace } from 'hooks/useSearchPlace';
import { Place, PlaceResType } from 'types/place';

import * as S from './styled';

export default function Search() {
  const mutation = UseSearchPlace();
  // 검색 결과
  const [searchResult, setSearchResult] = useState<PlaceResType | null>(null);
  // 최근에 찾아본 기록
  const [recentlySearchData, setRecentlySearchData] = useState<Place[]>(RECENTLY_SEARCH);

  useEffect(() => {
    if (mutation.data) {
      setSearchResult(mutation.data);
      return;
    }
  }, [mutation.data]);

  const handleClear = () => {
    setSearchResult(null);
    mutation.reset();
  };

  const handleRecentlyDataClear = () => {
    setRecentlySearchData([]);
  };

  const renderPage = () => {
    // 기본 상태
    if (mutation.isError || !searchResult) {
      return (
        <S.Contents>
          <S.ItemWrapper>
            <S.TitleWrapper>
              <S.Title>많이 검색하는 장소</S.Title>
            </S.TitleWrapper>
            <S.ChipWrapper>
              {MOST_SEARCHED_PLACE &&
                MOST_SEARCHED_PLACE.map((item, index) => {
                  return <Chip key={index}>{item.title}</Chip>;
                })}
            </S.ChipWrapper>
          </S.ItemWrapper>
          <S.ItemWrapper>
            <S.TitleWrapper>
              <S.Title>최근에 찾아봤어요</S.Title>
              <S.DeleteAll onClick={handleRecentlyDataClear}>전체 삭제</S.DeleteAll>
            </S.TitleWrapper>
            <div>
              {recentlySearchData.length === 0 ? (
                <div></div>
              ) : (
                recentlySearchData.map((place, index) => (
                  <SearchPlaceItem
                    key={index}
                    placeName={place.title}
                    address={place.address}
                    category={place.category}
                    isClose={true}
                  />
                ))
              )}
            </div>
          </S.ItemWrapper>
        </S.Contents>
      );
    }

    // 검색 결과 없음
    if (searchResult.items === undefined) {
      return <div></div>;
    }

    return (
      <S.SearchList>
        {searchResult.items.map((place, index) => (
          <SearchPlaceItem
            key={index}
            placeName={place.title}
            address={place.address}
            category={place.category}
          />
        ))}
      </S.SearchList>
    );
  };

  // 메인 뼈대
  return (
    <>
      <SearchBar
        searchAction={mutation.mutate}
        onClear={handleClear}
        placeholder={'지하철 역, 장소 검색'}
      />
      <S.Main>{renderPage()}</S.Main>
    </>
  );
}
