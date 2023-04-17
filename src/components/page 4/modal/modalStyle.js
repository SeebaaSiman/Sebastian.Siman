import styled, { keyframes } from "styled-components";

export const ModalContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
export const Button = styled.button`
  position:absolute;
  left: 0;
  top:0;
  margin: 0.5rem;
  z-index: 900;
  `

const projectOutLeft = keyframes`
from {
    transform: translateY(0%);
  }
  to {
      transform: translateY(-100%);
    }
      `;
const projectInLeft = keyframes` from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }`;
const contactOutLeft = keyframes`
from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
      `;
const contactInLeft = keyframes` from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0%);
}
  `;
export const ModalLeft = styled.div`
/* flex:1; */
  width: 50%;
  height: 100%;
  background-color:${props => props.variant === 'Projects' ? '#ffff' : 'green'};
  animation: ${props => props.variant === 'Projects' ? projectInLeft : contactInLeft} 0.8s ease-in-out forwards;

  &.close-modal {
animation: ${props => props.variant === 'Projects' ? projectOutLeft : contactOutLeft} 0.8s ease-in-out forwards;
}
`;

const projectOutRight = keyframes`  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
  `;
const projectInRight = keyframes`  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
  `;
const contactOutRight = keyframes`  from {
  transform: translateX(0%);
}
to {
  transform: translateX(100%);
}
`;
const contactInRight = keyframes`  from {
  transform: translateX(100%);
}
to {
  transform: translateX(0%);
}
  `;
export const ModalRight = styled.div`
/* position: relative; */
/* flex:1; */
  width: 50%;
  height: 100%;
  background-color:${props => props.variant === 'Projects' ? '#ffff' : 'green'};
  animation: ${props => props.variant === 'Projects' ? projectInRight : contactInRight} 0.8s ease-in-out forwards;

  &.close-modal {
      animation: ${props => props.variant === 'Projects' ? projectOutRight : contactOutRight} 0.8s ease-in-out forwards;

}
`;

