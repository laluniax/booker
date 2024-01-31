import { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { mapMarkerDataHandler } from '../../api/supabase.api';
import { Location, Marker, UserLocationState, mapMarkerDataTypes } from '../../types/types';
import * as St from './KakaoMap.styled';
import AboutIndBookStore from './aboutindbookstore/AboutIndBookStore';
import DetailMapInfo from './detailmapinfo/DetailInfo';

function KakaoMap() {
  //db에 저장한 맵 마커 데이터
  const [markerData, setMarkerData] = useState<mapMarkerDataTypes[] | undefined>([]);
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);
  const [selectedMarkerId, setSelectedMarkerId] = useState<number | null>(null);
  const [searchPlace, setSearchPlace] = useState<string>('');
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [aroundStore, setAroundStore] = useState<mapMarkerDataTypes[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState<mapMarkerDataTypes | null>(null);
  const [currentPosition, setCurrentPosition] = useState<UserLocationState>({
    lat: 37.50231497199725,
    lng: 127.04484141806945,
  });
  const baseUrl = process.env.REACT_APP_KAKAO_API_BASE_URL;

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
        const level = map.getLevel();
        fetchBookstoresNearby(map.getCenter().getLat(), map.getCenter().getLng());
      };

      kakao.maps.event.addListener(map, 'zoom_changed', zoomChangedCallback);

      return () => {
        kakao.maps.event.removeListener(map, 'zoom_changed', zoomChangedCallback);
      };
    }
  }, [map]);

  const searchStore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ps = new window.kakao.maps.services.Places();

    if (searchPlace) {
      ps.keywordSearch(searchPlace, (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          let markers: Marker[] = data.map((item) => ({
            position: {
              lat: parseFloat(item.y),
              lng: parseFloat(item.x),
            },
            content: item.place_name,
          }));

          setMarkers(markers);

          if (data.length > 0) {
            const firstResult = data[0];
            const latitude = parseFloat(firstResult.y);
            const longitude = parseFloat(firstResult.x);
            fetchBookstoresNearby(latitude, longitude);
          }

          if (map) {
            map.setBounds(bounds); // 지도의 확대/축소 레벨과 중심 위치를 설정합니다.
          }
        }
      });
    }
    setSearchPlace('');
  };

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

  const onSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlace(e.target.value);
  };

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
          <St.SearchWrapper>
            <St.SearchFormWrapper>
              <St.SearchForm onSubmit={searchStore}>
                <St.SearchBox>
                  <St.SearchInput type="text" value={searchPlace} onChange={onSearchChanged} />
                  <St.SearchButton>검색</St.SearchButton>
                </St.SearchBox>
              </St.SearchForm>
            </St.SearchFormWrapper>

            <St.SearchList>
              {aroundStore &&
                aroundStore.length > 0 &&
                aroundStore.map((marker, index) => (
                  <St.SearchResultWrapper
                    key={index}
                    onClick={() => updateMapCenter(marker.latitude, marker.longitude)}>
                    <St.SearchName>{marker.name}</St.SearchName>
                    <St.SearchAdress>{marker.address}</St.SearchAdress>
                  </St.SearchResultWrapper>
                ))}
            </St.SearchList>
          </St.SearchWrapper>

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
                    <CustomOverlayMap
                      zIndex={1}
                      position={{ lat: position.latitude, lng: position.longitude }}
                      yAnchor={1}>
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
                              <St.StoreInfo>{position.tel_num}</St.StoreInfo>
                            </St.StoreInfoWrapper>
                          </St.BodyWrapper>
                        </St.Info>
                        <St.DetailButton onClick={() => selectMarkerInfoHandler(position.id)}>상세보기</St.DetailButton>
                      </St.InfoWrapper>
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
