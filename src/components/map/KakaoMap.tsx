import { useEffect, useState } from 'react';
import { mapMarkerDataHandler } from '../../api/supabase.api';
import { mapMarkerDataTypes } from '../../types/types';
import DetailInfo from './DetailInfo';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import AboutIndBookStore from './AboutIndBookStore';

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
  }, []);

  const markerClickHandler = (markerId: number) => {
    setSelectedMarkerId((prev) => (prev === markerId ? null : markerId));
  };

  const selectMarkerInfoHandler = (markerId: number) => {
    const clickedMarkerInfo = markerData?.find((marker) => marker.id === markerId);
    setSelectedMarkerInfo(clickedMarkerInfo || null);
  };

  const closeDetailInfo = () => {
    setSelectedMarkerInfo(null);
    setSelectedMarkerId(null);
  };

  return (
    <>
      <AboutIndBookStore />
      {/* <RemovableCustomOverlayStyle /> */}
      <Map id={'map'} center={{ lat: 37.5759, lng: 126.9762 }} style={{ width: '100%', height: '450px' }} level={5}>
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
                            src="/images/independentBookStoreImage.png"
                            width="73"
                            height="70"
                            alt="독립서점 이미지"
                          />
                        </div>
                        <button onClick={() => selectMarkerInfoHandler(position.id)}>상세보기</button>
                      </div>
                    </div>
                  </div>
                </CustomOverlayMap>
              )}
            </MapMarker>
          );
        })}
      </Map>
      {selectedMarkerInfo && (
        <div>
          <DetailInfo markerInfo={selectedMarkerInfo} />
        </div>
      )}
    </>
  );
}
export default KakaoMap;
