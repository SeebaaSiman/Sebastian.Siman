import styled, { keyframes } from "styled-components";

export const TitleTyping = () => {
  return (
    <Container>
      <Wrapper>
        <Static>I'm a</Static>
        <Dynamic>
          <li>
            <span>Sebastián Siman</span>
          </li>
          <li>
            <span>Developer web</span>
          </li>
        </Dynamic>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Static = styled.div`
  color: white;
  font-size: 4rem;
  font-weight: 400;
`;
const typing = keyframes` 40%, 60%{
  left: calc(100% + 30px);
}
100%{
  left: 0;
}`;
const slide = keyframes`
100%{top:-360px}`;
const Dynamic = styled.ul`
  margin-left: 1rem;
  height: 7rem;
  line-height: 7rem;
  overflow: hidden;
  li {
    display: relative;
    top: 0;
    animation: ${slide} 12s steps(2) infinite;
    list-style: none;
    color: #fc6d6d;
    font-size: 4rem;
    font-weight: 500;
  }
  span {
    position: relative;
    margin: 5px 0;
    line-height: 7rem;
  }
  span::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    border-left: 2px solid #fc6d6d;
    animation: ${typing} 1.5s steps(10) infinite; //activar la animación con hover
  }
`;
