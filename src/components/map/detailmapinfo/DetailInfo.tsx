import { mapMarkerDataTypes } from '../../../types/types';
import * as St from './DetailInfo.styled';

function DetailMapInfo({ markerInfo }: { markerInfo: mapMarkerDataTypes }) {
  return (
    <>
      <St.Container>
        <div>{markerInfo.name}</div>
        <img src="/images/bookImage.png" width="150" height="150" alt="독립서점 이미지" />
        <St.MarkerDataDetail>
          <div>
            주소 : {markerInfo.address} (우) {markerInfo.postal_code}
          </div>
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
        </St.MarkerDataDetail>
      </St.Container>
    </>
  );
}

export default DetailMapInfo;
