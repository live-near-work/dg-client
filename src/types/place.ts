export interface Place {
  title: string;
  address: string;
  category: string;
  roadAddress?: string;
  link?: string;
  mapx?: number | string;
  mapy?: number | string;
  description?: string;
  telephone?: string;
}

export interface PlaceReqType {
  text: string;
  display?: number;
}

export interface PlaceResType {
  display: number;
  items: Place[];
  lastBuildDate: string;
  start: number;
  total: number;
}
