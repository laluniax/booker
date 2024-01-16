import React from 'react'

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal
// // Modal.tsx
// import React from 'react';
// import styled from 'styled-components';

// const ModalBackdrop = styled.div`
//   position: fixed;
//   z-index: 1000;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalBox = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   max-height: 80vh;
//   width:80vh;
//   overflow-y: auto;
// `;

// type ModalProps = {
//   children: React.ReactNode;
//   isOpen: boolean;
//   onClose: () => void;
// };

// const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <ModalBackdrop onClick={onClose}>
//       <ModalBox onClick={(e) => e.stopPropagation()}>
//         {children}
//       </ModalBox>
//     </ModalBackdrop>
//   );
// };

// export default Modal;
