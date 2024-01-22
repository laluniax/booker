import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { mapMarkerDataHandler } from '../../api/supabase.api';
import { mapMarkerDataTypes } from '../../types/types';
import * as St from './KakaoMap.styled';
import AboutIndBookStore from './aboutindbookstore/AboutIndBookStore';
import DetailMapInfo from './detailmapinfo/DetailInfo';

function KakaoMap() {
  const [markerData, setMarkerData] = useState<mapMarkerDataTypes[] | undefined>([]);
  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState<mapMarkerDataTypes | null>(null);

  const fetchMapMarkerData = async () => {
    try {
      const result = await mapMarkerDataHandler();
      setMarkerData(result as any[]);
    } catch (err) {
      console.log(err);
    }
  };

  // 가져온 데이터 상태 변수에 저장
  useEffect(() => {
    //함수 호출하여 데이터 가져오기
    fetchMapMarkerData();
    //현재 위치
  }, []);

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
          <St.Title>전국에 독립서점은 얼마나 있을까?</St.Title>{' '}
          <Map id={'map'} center={{ lat: 37.5759, lng: 126.9762 }} style={{ width: '100%', height: '60rem' }} level={5}>
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
                  {selectedMarkerId === position.id && ( //내가 연것만 열려야함
                    <CustomOverlayMap position={{ lat: position.latitude, lng: position.longitude }}>
                      <div className="wrap">
                        <div className="info">
                          <div className="title">
                            {position.name}
                            <div className="close" onClick={() => markerClickHandler(position.id)} title="닫기">
                              <img src="/images/close.png" width="20" height="20" alt="닫기" />
                            </div>
                          </div>
                          <div className="body">
                            <div className="img">
                              <img
                                src="/images/indBookStore/independentBookStoreImage.jpg"
                                width="73"
                                height="70"
                                alt="독립서점 이미지"
                              />
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
