import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import styled, { keyframes } from "styled-components";

export const Modal = ({ onClose }) => {
  const [clousing, setClousing] = useState(false);

  const showOut = () => {
    setClousing(true);
    setTimeout(() => {
      onClose();
      setClousing(false);
    }, 500);
  };
  return (
    <ModalContainer className={` ${clousing ? "closeModal" : ""}`}>
      <ModalLeft className="left"></ModalLeft>
      <ModalRight className="right">
        <button onClick={showOut}>Cerrar modal</button>
      </ModalRight>
    </ModalContainer>
  );
};
const slideOutLeft = keyframes`   from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
    `;
const slideOutRight = keyframes`  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
    `;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  &.closeModal .left {
    animation: ${slideOutLeft} 0.5s ease;
  }

  &.closeModal .right {
    animation: ${slideOutRight} 0.5s ease;
  }
`;
const slideInLeft = keyframes` from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }`;
const ModalLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: #0e1197;
  animation: ${slideInLeft} 0.5s ease;
`;
const slideInRight = keyframes`  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
  `;
const ModalRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: #245f8f;
  animation: ${slideInRight} 0.5s ease;
`;

// const Modal = ({ modalOpen, handleCloseModal, children }) => {
//     return (
//       <div className="modal" ref={modalRef}>

//         <div className="modal-content">{children}</div>

//         <button className="modal-close" onClick={handleCloseModal}>
//           X
//         </button>
//       </div>
//     );
//   };
