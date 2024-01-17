import { mapMarkerDataTypes } from '../../types/types';

function DetailInfo({ markerInfo }: { markerInfo: mapMarkerDataTypes }) {
  return (
    <div className="detail-info">
      <div className="title">{markerInfo.name}</div>
      <div className="body">
        <div className="img">
          <img src="/images/bookImage.png" width="73" height="70" alt="독립서점 이미지" />
        </div>
        <div className="desc">
          <div className="ellipsis">{markerInfo.address}</div>
          <div className="jibun ellipsis">(우) {markerInfo.postal_code}</div>
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
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
