import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import CloseIcon from 'svg/close-icon-item.svg';
import LocationIcon from 'svg/location-icon.svg';
import SubwayIcon from 'svg/subway-icon.svg';

import * as S from './styled';

interface SearchPlaceItemProps {
  placeName: string;
  address: string;
  category: string;
  isClose?: boolean;
}

export const SearchPlaceItem = ({
  placeName,
  address,
  category,
  isClose = false,
}: SearchPlaceItemProps) => {
  const router = useRouter();

  const sanitizePlaceName: string = DOMPurify.sanitize(placeName);

  const getTextFromHtml = (html: string) => {
    // 서버 환경에서는 빈 문자열 반환
    if (typeof document === 'undefined') {
      return '';
    }

    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.textContent || '';
  };

  const parsedPlaceName: string = getTextFromHtml(sanitizePlaceName);

  const renderIcon = (category: string) => {
    if (category === '교통,운수>지하철,전철') {
      return <SubwayIcon />;
    }
    return <LocationIcon />;
  };

  return (
    <S.SearchItem
      onClick={() => {
        router.push(`/?place=${encodeURIComponent(parsedPlaceName)}`, { scroll: false });
      }}
    >
      <S.SearchItemContent $isClose={isClose}>
        <div className={'title'}>
          <span className={'icon'}>{renderIcon(category)}</span>
          <span className={'placeName'} dangerouslySetInnerHTML={{ __html: sanitizePlaceName }} />
        </div>
        <div className={'address'}>{address}</div>
      </S.SearchItemContent>
      {isClose && (
        <S.CloseIcon>
          <CloseIcon />
        </S.CloseIcon>
      )}
    </S.SearchItem>
  );
};
