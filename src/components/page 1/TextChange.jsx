import styled, { keyframes } from "styled-components";
import { useTextChange } from "../../hook/useTextChange";

export const TextChange = () => {
  const { prefix, suffix } = useTextChange();
  return (
    <Container>
      <Prefix>{prefix}</Prefix>
      <Suffix>{suffix}</Suffix>
    </Container>
  );
};
const showInLeft = keyframes`
from {
  transform: translateX(-100%);

}
to {
  transform: translateX(0%);
  }
    `;
const Container = styled.div`
  /* flex: 1;   */
  animation: ${showInLeft} 0.8s ease-in-out;
`;
const Prefix = styled.span`
  color: #fff;
  text-shadow: 1px 2px 1px #474747;
  display: inline-block;
  margin-right: 0.2rem;
  font-size: calc(2.8rem + 40%);
  font-weight: 400;
`;

const Suffix = styled(Prefix)`
  margin-left: 0.2rem;
  color: #000;
`;
