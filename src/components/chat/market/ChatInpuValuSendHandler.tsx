import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import * as St from '../market/ChatInpuValuSendHandler.styled';

import { ChatId, person, productState } from '../../../state/atom/chatAtom';
import { sendMessage } from '../../../api/Chat.api';

const ChatInpuValuSendHandler = () => {
  const [inputValue, setInputValue] = useState('');

  const [chatId, setChatId] = useRecoilState(ChatId);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [productId, setProductId] = useRecoilState(productState);

  //모달 창 뜨고 메시지 보내는 핸들러들
  // 메시지 전송 핸들러
  const KeyPresshandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      if (event.nativeEvent.isComposing === false) {
        event.preventDefault(); // 폼 제출 방지
        sendMessage({
          content: inputValue,
          author_id: LoginPersonal,
          chat_id: chatId,
          item_id: productId,
          // others_id: otherLoginPersonal,
        });
        setInputValue('');
      }
    }
  };

  //dm메시지 전송
  const SendDmMessage = async () => {
    if (!inputValue.trim()) return; // 메시지가 비어있지 않은지 확인

    sendMessage({
      content: inputValue,
      author_id: LoginPersonal,
      chat_id: chatId,
      item_id: productId,
      // others_id: otherLoginPersonal,
    });

    setInputValue('');
  };

  //입력값 가져오기
  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <St.InputField
        value={inputValue}
        onChange={InputChanger}
        onKeyDown={KeyPresshandler}
        placeholder="메세지를 입력해주세요"
      />
      <St.SendButton onClick={SendDmMessage}>전송</St.SendButton>
    </>
  );
};

export default ChatInpuValuSendHandler;
