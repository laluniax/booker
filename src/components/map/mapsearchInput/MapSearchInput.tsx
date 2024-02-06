import { useRecoilState } from 'recoil';
import { MarkerKakaoState, SearchKakaoState } from '../../../state/atom/kakaoMapAtom';
import * as St from '../KakaoMap.styled';
import { MarkerTypes, searchProps } from '../KakaoMap.type';

const MapSearchInput = ({ map, fetchBookstoresNearby, aroundStore, updateMapCenter }: searchProps) => {
  const [searchPlace, setSearchPlace] = useRecoilState<string>(SearchKakaoState);
  const [markers, setMarkers] = useRecoilState<MarkerTypes[]>(MarkerKakaoState);
  const onSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPlace(e.target.value);
  };

  const searchStore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ps = new window.kakao.maps.services.Places();
    if (searchPlace) {
      ps.keywordSearch(searchPlace, (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          let markers: MarkerTypes[] = data.map((item) => ({
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

  return (
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
            <St.SearchResultWrapper key={index} onClick={() => updateMapCenter(marker.latitude, marker.longitude)}>
              <St.SearchName>{marker.name}</St.SearchName>
              <St.SearchAdress>{marker.address}</St.SearchAdress>
            </St.SearchResultWrapper>
          ))}
      </St.SearchList>
    </St.SearchWrapper>
  );
};

export default MapSearchInput;
