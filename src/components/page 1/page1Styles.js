import styled, { keyframes } from "styled-components";
import { device } from "../../style/StyleGlobal";

export const HomeContainer = styled.div`
  position:relative;
  height: 100vh;
  width: 100%;
`;
const showInRight = keyframes`
from {
  transform: translateX(100%);

}
to {
  transform: translateX(0%);
  }
    `;
export const ContainerBanner = styled.div`
  width:100%;
  height: 95%;
  display: flex;
  flex-direction:column-reverse;
  justify-content: space-around;
  align-items: center;

  @media ${device.lg}{
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div{
    @media ${device.sm}{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  img {
    width: calc(5rem +1vw);
    height: calc(5rem +1vw);
    object-fit: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    animation: ${showInRight} 0.8s ease-in-out;
    @media ${device.sm}{

      margin-top:2rem;
    }
    @media ${device.lg}{
margin-top:0;
    }
  }
`;
export const ContainerMouse = styled.div`
  position:absolute;
  bottom:3%;
  width:100%;
  height: 4.5rem;

  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
`;