'use client';

import RightBackIcon from 'svg/right-back-icon.svg';
import SpeakerIcon from 'svg/speaker-icon.svg';

import * as S from './styled';

export const AboutService = () => {
  return (
    <S.AboutService href={'/landing'}>
      <S.LearnMore>
        <SpeakerIcon />
        <div className={'learn-more-text'}>동그리미 자세히 알아보기</div>
      </S.LearnMore>
      <RightBackIcon />
    </S.AboutService>
  );
};
