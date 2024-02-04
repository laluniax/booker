import { AdminChatBodyProps } from '../../../map/KakaoMap.type';
import * as St from '../chatadmin/AdminChatRoom.styled';

const AdminChatBody = ({ messages }: AdminChatBodyProps) => {
  return (
    <St.ChatBody>
      {messages.map((message) => {
        return (
          <>
            {message.message_type === 'answer' ? (
              <St.AdminMessage>{message.content}</St.AdminMessage>
            ) : (
              <St.UserMessage>{message.content}</St.UserMessage>
            )}
          </>
        );
      })}
    </St.ChatBody>
  );
};

export default AdminChatBody;
