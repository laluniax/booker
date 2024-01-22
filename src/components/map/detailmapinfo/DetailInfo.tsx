import { mapMarkerDataTypes } from '../../../types/types';
import * as St from './DetailInfo.styled';

function DetailMapInfo({ markerInfo }: { markerInfo: mapMarkerDataTypes }) {
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
            주소 : {markerInfo.address} (우) {markerInfo.postal_code}
            <div>서점 소개 : {markerInfo.optn_dc}</div>
            <div>상세 설명 : {markerInfo.adit_dc}</div>
            <div>전화번호 : {markerInfo.tel_num}</div>
            <div>평일 오픈 시간 : {markerInfo.weekdays_open_at}</div>
            <div>평일 마감 시간 : {markerInfo.weekdays_close_at}</div>
            <div>토요일 오픈 시간 : {markerInfo.saturday_open_at}</div>
            <div>토요일 마감 시간 : {markerInfo.saturday_close_at}</div>
            <div>일요일 오픈 시간 : {markerInfo.sunday_open_at}</div>
            <div>일요일 마감 시간 : {markerInfo.sunday_close_at}</div>
            <div>공휴일 오픈 시간 : {markerInfo.closedDay_open_at}</div>
            <div>공휴일 마감 시간 : {markerInfo.closedDay_close_at}</div>
            <div>서점 휴무일 : {markerInfo.closedDay_guide}</div>
          </St.DetailBox>
        </St.MarkerDataDetail>
      </St.Container>
    </>
  );
}

export default DetailMapInfo;
