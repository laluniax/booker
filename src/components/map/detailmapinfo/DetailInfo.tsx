import { DetailMapInfoProps } from '../KakaoMap.type';
import * as St from './DetailInfo.styled';

function DetailMapInfo({ markerInfo }: DetailMapInfoProps) {
  return (
    <>
      <St.Container>
        <St.MarketNameAndImage>
          <St.MarketName>{markerInfo.name}</St.MarketName>
          <St.BookStoreImage />
        </St.MarketNameAndImage>
        <br />
        <St.MarkerDataDetail>
          <St.DetailBox>
            <St.DetailContent>
              주소 : {markerInfo.address} (우) {markerInfo.postal_code}
            </St.DetailContent>
            <St.DetailContent>
              서점 소개 : <St.DetainSpan> {markerInfo.optn_dc}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              상세 설명 : <St.DetainSpan> {markerInfo.adit_dc}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              전화번호 :<St.DetainSpan> {markerInfo.tel_num}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              평일 오픈 시간 : <St.DetainSpan> {markerInfo.weekdays_open_at}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              평일 마감 시간 :<St.DetainSpan> {markerInfo.weekdays_close_at}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              토요일 오픈 시간 :<St.DetainSpan>{markerInfo.saturday_open_at}</St.DetainSpan>{' '}
            </St.DetailContent>
            <St.DetailContent>
              토요일 마감 시간 : <St.DetainSpan>{markerInfo.saturday_close_at}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              일요일 오픈 시간 : <St.DetainSpan>{markerInfo.sunday_open_at}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              일요일 마감 시간 : <St.DetainSpan>{markerInfo.sunday_close_at}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              공휴일 오픈 시간 : <St.DetainSpan>{markerInfo.closedDay_open_at}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              공휴일 마감 시간 : <St.DetainSpan>{markerInfo.closedDay_close_at}</St.DetainSpan>
            </St.DetailContent>
            <St.DetailContent>
              서점 휴무일 : <St.DetainSpan>{markerInfo.closedDay_guide}</St.DetainSpan>
            </St.DetailContent>
          </St.DetailBox>
        </St.MarkerDataDetail>
      </St.Container>
    </>
  );
}

export default DetailMapInfo;
