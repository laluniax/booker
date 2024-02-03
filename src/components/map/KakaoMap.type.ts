// 위치 정보 타입 정의
export type LocationTypes = {
  latitude: number | null;
  longitude: number | null;
};

export type MarkerTypes = {
  position: {
    lat: number; // 숫자 타입으로 수정
    lng: number; // 숫자 타입으로 수정
  };
  content: string;
};

export type UserLocationStateTypes = {
  lat: number;
  lng: number;
};

export type MapMarkerDataTypes = {
  id: number;
  gov_id: string;
  name: string;
  category1: string;
  category2: string;
  address: string;
  latitude: number;
  longitude: number;
  weekdays_open_at: number;
  weekdays_close_at: number;
  saturday_open_at: number;
  saturday_close_at: number;
  sunday_open_at: number;
  sunday_close_at: number;
  closedDay_open_at: number;
  closedDay_close_at: number;
  closedDay_guide: string;
  tel_num: number;
  optn_dc: string;
  adit_dc: string;
  postal_code: number;
};
