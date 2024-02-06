import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilState } from 'recoil';
import { mapMarkerDataHandler } from '../../api/Supabase.api';
import { MarkerKakaoState, selectedMarkerInfoState } from '../../state/atom/kakaoMapAtom';
import * as St from './KakaoMap.styled';
import { LocationTypes, MapMarkerDataTypes, MarkerTypes, UserLocationStateTypes } from './KakaoMap.type';
import AboutIndBookStore from './aboutindbookstore/AboutIndBookStore';
import DetailMapInfo from './detailmapinfo/DetailInfo';
import MapSearchInput from './mapsearchInput/MapSearchInput';
import SelectMarkerInfo from './selectmarkerinfo/SelectMarkerInfo';

function KakaoMap() {
  //db에 저장한 맵 마커 데이터
  const [markerData, setMarkerData] = useState<MapMarkerDataTypes[] | undefined>([]);
  const [location, setLocation] = useState<LocationTypes>({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);
  const [markers, setMarkers] = useRecoilState<MarkerTypes[]>(MarkerKakaoState);
  const [aroundStore, setAroundStore] = useState<MapMarkerDataTypes[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useRecoilState(selectedMarkerInfoState);
  const [currentPosition, setCurrentPosition] = useState<UserLocationStateTypes>({
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
    fetchMapMarkerData();
    getLocation();
  }, []);

  useEffect(() => {
    if (map && markers.length > 0) {
      const bounds = new kakao.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds.extend(new kakao.maps.LatLng(marker.position.lat, marker.position.lng));
      });
      map.setBounds(bounds);
    }
  }, [map, markers]); // markers 혹은 map이 변경될 때만 실행됩니다.

  useEffect(() => {
    if (map) {
      const zoomChangedCallback = () => {
        fetchBookstoresNearby(map.getCenter().getLat(), map.getCenter().getLng());
      };
      kakao.maps.event.addListener(map, 'zoom_changed', zoomChangedCallback);
      return () => {
        kakao.maps.event.removeListener(map, 'zoom_changed', zoomChangedCallback);
      };
    }
  }, [map]);

  // Express API에서 서점 목록을 가져오는 함수
  const fetchBookstoresNearby = async (latitude: number, longitude: number) => {
    try {
      // 가져온 위도와 경도를 사용하여 일정 반경 내의 서점 정보를 가져옵니다.
      const radius = 3;
      const response = await fetch(
        `https://port-0-independentbookstoresdb-3wh3o2blr53yzc2.sel5.cloudtype.app/bookstoresdb?lat=${latitude}&lng=${longitude}&radius=${radius}`,
        {
          method: 'GET',
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status !== 200) {
        throw new Error('서점 데이터를 불러오는 데 실패했습니다.');
      }

      const data = await response.json();
      setAroundStore(data);
    } catch (error) {
      console.error('API 요청 중 오류 발생: ', error);
      setError('서점 데이터를 불러오는 데 실패했습니다.');
    }
  };

  //현재 좌표 저장 함수
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setError('Unable to retrieve your location');
        },
      );
    }
  };

  const fetchMapMarkerData = async () => {
    try {
      const result = await mapMarkerDataHandler();
      setMarkerData(result as any[]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateMapCenter = (latitude: number, longitude: number) => {
    setCurrentPosition({ lat: latitude, lng: longitude });
    if (map) {
      map.setCenter(new kakao.maps.LatLng(latitude, longitude));
    }
  };

  return (
    <St.Container>
      <St.MapContainer>
        <St.Map>
          <St.Title>전국에 독립서점은 얼마나 있을까?</St.Title>
          {/* 검색창 */}
          <MapSearchInput
            fetchBookstoresNearby={fetchBookstoresNearby}
            map={map}
            aroundStore={aroundStore}
            updateMapCenter={updateMapCenter}
          />
          <Map
            id={'map'}
            center={currentPosition}
            style={{ width: '100%', height: '60rem' }}
            level={3}
            onCreate={(map: kakao.maps.Map) => {
              setMap(map);
            }}>
            {/*현재 위치 띄우는 맵 마커 */}
            <MapMarker
              position={currentPosition}
              zIndex={1}
              infoWindowOptions={{
                zIndex: 1,
              }}></MapMarker>
            {markerData?.map((position, index) => {
              return <SelectMarkerInfo key={index} position={position} markerData={markerData} />;
            })}
          </Map>
        </St.Map>
        {selectedMarkerInfo === null ? (
          <></>
        ) : (
          <>
            <DetailMapInfo markerInfo={selectedMarkerInfo[0]} />
          </>
        )}
      </St.MapContainer>
      <AboutIndBookStore />
    </St.Container>
  );
}
export default KakaoMap;
