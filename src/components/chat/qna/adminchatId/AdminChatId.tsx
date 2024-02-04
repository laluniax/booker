import { AdminChatIdProps } from '../../../map/KakaoMap.type';
import * as St from '../chatadmin/AdminChatRoom.styled';

const AdminChatId = ({ qnaRoomIds, handleSenderClick }: AdminChatIdProps) => {
  return (
    <St.ChatBody>
      {qnaRoomIds.map((qnaRoomID) => (
        <div key={qnaRoomID} onClick={() => handleSenderClick(qnaRoomID)}>
          <div>{qnaRoomID}</div>
        </div>
      ))}
    </St.ChatBody>
  );
};

export default AdminChatId;
