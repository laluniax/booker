import { atom } from 'recoil';
import { MapMarkerDataTypes, MarkerTypes } from '../../components/map/KakaoMap.type';

export const selectedMarkerId = atom({
  key: 'selectedMarkerId',
  default: null,
});

export const selectedMarkerInfoState = atom<MapMarkerDataTypes[] | null>({
  key: 'selectedMarkerInfoState', // 고유한 키
  default: null, // 초기값
});

export const SearchKakaoState = atom({
  key: 'SearchKakaoState',
  default: '',
});

export const MarkerKakaoState = atom<MarkerTypes[]>({
  key: 'MarkerKakaoState',
  default: [],
});
