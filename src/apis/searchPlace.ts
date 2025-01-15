import { api } from 'apis/index';
import { PlaceReqType, PlaceResType } from 'types/place';

export const searchPlace = async (data: PlaceReqType): Promise<PlaceResType> => {
  const response = await api.get<PlaceResType>(
    `/naver/v1/search/local.json?query=${data.text}&display=${data.display}`,
    {
      headers: {
        'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_CLIENT_SECRET,
      },
    },
  );
  return response.data;
};
