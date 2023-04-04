import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
export const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  if (visible) {
    return (
      <LoaderContent>
        <Img src={"/src/assets/ss.png"} />
      </LoaderContent>
    );
  }
  if (!visible) {
    return null;
  }

  // return visible ? (
  //   <LoaderContent>
  //     <Img src={"/src/assets/ss.png"} />
  //   </LoaderContent>
  // ) : null;
};

const rotate = keyframes`
      0% {
        transform: scale(1) rotate(0);
      }
      50% {
        transform: scale(1.5) rotate(360deg);
      }
      80% {
        transform: scale(1) rotate(720deg);
      }
      100% {
        /* opacity: 0; */
        transform: scale(0) rotate(1080deg);
      }
  `;

const LoaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  /* animation: sweep 3s linear forwards; */
`;
const Img = styled.img`
  animation: ${rotate} 2s ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

// const sweep = //*keyframes`
//      0% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
//   }
//   33% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
//   }
//   100% {
//     clip-path: polygon(0 0, 0 0, 0% 100%, 0% 100%);
//   }
//   `;
