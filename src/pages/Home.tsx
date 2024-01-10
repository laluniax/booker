import React, { useState } from "react";
import ChatApp from "../components/Wishper/ChatApp";
import Modal from "../components/Wishper/Modal";
import styled from "styled-components";


const OpenChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  return (
    <>
      <OpenChatButton onClick={openChat}>Open Chat</OpenChatButton>
      <Modal isOpen={isChatOpen} onClose={closeChat}>
        <ChatApp />
      </Modal>
    </>
  );
};

export default Home;
