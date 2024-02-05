import { MessageTypes } from '../../types/types';

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

export type KakaoProps = {
  position: {
    address: string;
    adit_dc: string | null;
    category1: string;
    category2: string;
    closedDay_close_at?: string | number;
    closedDay_guide?: string | number;
    closedDay_open_at?: string | number;
    gov_id: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    optn_dc: string | null;
    postal_code: number | null;
    saturday_close_at?: string | number;
    saturday_open_at?: string | number;
    sunday_close_at?: string | number;
    sunday_open_at?: string | number;
    tel_number?: number | null;
    weekdays_close_at?: string | number;
    weekdays_open_at?: string | number;
  };
  markerData: MapMarkerDataTypes[];
};

export type searchProps = {
  fetchBookstoresNearby: (latitude: number, longitude: number) => void;
  map: kakao.maps.Map | null;
  aroundStore: MapMarkerDataTypes[];
  updateMapCenter: (latitude: number, longitude: number) => void;
};
export type AdminChatBodyProps = {
  messages: MessageTypes[];
};

export type AdminChatIdProps = {
  qnaRoomIds: string[]; // qnaRoomIds는 문자열 배열
  handleSenderClick: (qnaRoomID: string) => void; // handleSenderClick은 문자열을 매개변수로 받고 반환 값이 없는 함수
};
