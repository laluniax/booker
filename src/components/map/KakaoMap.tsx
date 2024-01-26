import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { mapMarkerDataHandler } from '../../api/supabase.api';
import { mapMarkerDataTypes } from '../../types/types';
import * as St from './KakaoMap.styled';
import AboutIndBookStore from './aboutindbookstore/AboutIndBookStore';
import DetailMapInfo from './detailmapinfo/DetailInfo';

interface UserLocationState {
  lat: number;
  lng: number;
}

function KakaoMap() {
  //db에 저장한 맵 마커 데이터
  const [markerData, setMarkerData] = useState<mapMarkerDataTypes[] | undefined>([]);
  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState<mapMarkerDataTypes | null>(null);
  const [currentPosition, setCurrentPosition] = useState<UserLocationState>({
    lat: 37.50231497199725,
    lng: 127.04484141806945,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude, // 경도
          });
        },
        (err) => {
          setCurrentPosition({
            lat: 37.566826,
            lng: 126.9786567,
          });
        },
      );
    } else {
      setCurrentPosition({
        lat: 37.50231497199725,
        lng: 127.04484141806945,
      });
    }
  }, []);

  // 가져온 데이터 상태 변수에 저장
  useEffect(() => {
    //함수 호출하여 데이터 가져오기
    fetchMapMarkerData();
    //현재 위치
  }, []);

  const fetchMapMarkerData = async () => {
    try {
      const result = await mapMarkerDataHandler();
      setMarkerData(result as any[]);
    } catch (err) {
      console.log(err);
    }
  };

  const markerClickHandler = (markerId: number) => {
    setSelectedMarkerId((prev) => (prev === markerId ? null : markerId));
  };

  const selectMarkerInfoHandler = (markerId: number) => {
    const clickedMarkerInfo = markerData?.find((marker) => marker.id === markerId);
    setSelectedMarkerInfo(clickedMarkerInfo || null);
  };

  return (
    <St.Container>
      <St.MapContainer>
        {/* <RemovableCustomOverlayStyle /> */}

        <St.Map>
          <St.Title>전국에 독립서점은 얼마나 있을까?</St.Title>

          <Map id={'map'} center={currentPosition} style={{ width: '100%', height: '60rem' }} level={5}>
            {/*현재 위치 띄우는 맵 마커 */}
            <MapMarker position={currentPosition}></MapMarker>
            {markerData?.map((position, index) => {
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
                  }}
                  onClick={() => markerClickHandler(position.id)}>
                  {selectedMarkerId === position.id && (
                    <CustomOverlayMap position={{ lat: position.latitude, lng: position.longitude }}>
                      <div className="wrap">
                        <div className="info">
                          <div className="title">
                            {position.name}
                            <div className="close" onClick={() => markerClickHandler(position.id)} title="닫기"></div>
                          </div>
                          <div className="body">
                            <div className="img">
                              <St.MapIndBookStoreImage />
                            </div>
                            <St.DetailButton onClick={() => selectMarkerInfoHandler(position.id)}>
                              상세보기
                            </St.DetailButton>
                          </div>
                        </div>
                      </div>
                    </CustomOverlayMap>
                  )}
                </MapMarker>
              );
            })}
          </Map>
        </St.Map>
        {selectedMarkerInfo && (
          <div>
            <DetailMapInfo markerInfo={selectedMarkerInfo} />
          </div>
        )}
      </St.MapContainer>
      <AboutIndBookStore />
    </St.Container>
  );
}
export default KakaoMap;
