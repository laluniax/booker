import { useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil';
import { selectedMarkerInfoState } from '../../../state/atom/kakaoMapAtom';
import * as St from '../KakaoMap.styled';
import { KakaoProps } from '../KakaoMap.type';

const SelectMarkerInfo = ({ position, markerData }: KakaoProps) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useRecoilState(selectedMarkerInfoState);

  const markerClickHandler = (markerId: number) => {
    setSelectedMarkerId((prev) => (prev === markerId ? null : markerId));
  };

  const selectMarkerInfoHandler = (markerId: number) => {
    const clickedMarkerInfo = markerData?.find((marker) => marker.id === markerId);
    setSelectedMarkerInfo(clickedMarkerInfo ? [clickedMarkerInfo] : []);
  };

  return (
    <MapMarker
      key={`${position.name}-${position.latitude}`}
      position={{ lat: position.latitude, lng: position.longitude }}
      image={{
        src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
        size: {
          width: 24,
          height: 35,
        }, // 마커이미지의 크기입니다
        options: {
          offset: {
            x: 27,
            y: 69,
          }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        },
      }}
      onClick={() => markerClickHandler(position.id)}>
      {selectedMarkerId === position.id && ( //내가 연것만 열려야함
        <CustomOverlayMap zIndex={1} position={{ lat: position.latitude, lng: position.longitude }} yAnchor={1}>
          <St.InfoWrapper>
            <St.Info>
              <St.InfoTitle>
                {position.name}
                <div className="close" onClick={() => markerClickHandler(position.id)} title="닫기">
                  x
                </div>
              </St.InfoTitle>
              <St.BodyWrapper>
                <St.ImgWrapper>
                  <St.MapIndBookStoreImage />
                </St.ImgWrapper>
                <St.StoreInfoWrapper>
                  <St.StoreInfo>{position.address}</St.StoreInfo>
                  <St.StoreInfo>{position.tel_number}</St.StoreInfo>
                </St.StoreInfoWrapper>
              </St.BodyWrapper>
            </St.Info>
            <St.DetailButton onClick={() => selectMarkerInfoHandler(position.id)}>상세보기</St.DetailButton>
          </St.InfoWrapper>
        </CustomOverlayMap>
      )}
    </MapMarker>
  );
};

export default SelectMarkerInfo;
