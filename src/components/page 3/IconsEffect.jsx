import styled, { keyframes } from "styled-components";

export const IconsEffect = () => {
  return (
    <IconWrapper>
      <Icon>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </Icon>
    </IconWrapper>
  );
};

const shake = keyframes`
  10%{
    transform: rotate(15deg);
  }
  20%{
    transform: rotate(-15deg);
  }
  30%{
    transform: rotate(15deg);
  }
  40%{
    transform: rotate(-15deg);
  }
  `;
const IconWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
`;
const Icon = styled.div`
  display: inline-flex;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  outline: 2px solid #fff;
  transition-property: outline-offset, outline-color, background-color;
  transition-duration: 0ms.25s;
  &:hover {
    outline-offset: 4px;
  }
  i {
    margin: auto;
    &:hover {
      animation: ${shake} 0.25s;
    }
  }
`;
