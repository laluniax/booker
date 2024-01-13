import { supabase } from '../../../api/supabase.api';
import * as St from './adminchat.styled';
const AdminChat = () => {
  /* 
    어드민 채팅 ui 
    1.어드민 로그인 후 모달클릭시 유저와 운영자간의 채팅방이 보여야 함 
    2.채팅방은 sender_id를 기준으로 보여야할듯..??   
    3.아이디를 가져오는건 좋은데 해당채팅방으로 어떻게 이동해야하는가 
  */
  //qna table 가져오는 함수
  const getQnaLog = async () => {
    const result = await supabase.from('qna').select('*');
  };

  return (
    <St.Container>
      <St.ChatWrapper>
        <St.ChatHeader>BOOKER(로고)</St.ChatHeader>
        <St.ChatBody>채팅방 출력</St.ChatBody>
      </St.ChatWrapper>
    </St.Container>
  );
};

export default AdminChat;
