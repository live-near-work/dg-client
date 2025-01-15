import { useMutation } from '@tanstack/react-query';

import { searchPlace } from 'apis/searchPlace';
import { PlaceReqType } from 'types/place';

export const UseSearchPlace = () => {
  const mutation = useMutation({
    mutationFn: (searchData: PlaceReqType) => searchPlace(searchData),
    onSuccess: data => {
      console.log('검색 결과:', data);
      return data;
    },
    onError: error => {
      console.error('검색 중 오류 발생:', error);
    },
  });

  return mutation;
};
