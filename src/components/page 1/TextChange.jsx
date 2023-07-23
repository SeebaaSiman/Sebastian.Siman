import styled, { keyframes } from "styled-components";
import { useTextChange } from "../../hook/useTextChange";
import { device } from "../../style/StyleGlobal";

export const TextChange = () => {
  const { prefix, suffix } = useTextChange();
  return (
    <ContainerText>
      <Prefix>{prefix}</Prefix>
      <Suffix>{suffix}</Suffix>
    </ContainerText>
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
const ContainerText = styled.div`
  width: 98%;
  height: 90%;
  animation: ${showInLeft} 0.8s ease-in-out;
`;
const Prefix = styled.span`
  color: #fff;
  text-shadow: 1px 2px 1px #474747;
  display: inline-block;
  margin-right: 0.2rem;
  font-weight: 400;
  font-size: 3rem;

  @media ${device.sm} {
    font-size: 3.3rem;
  }
  @media ${device.md} {
    font-size: 4rem;
  }
  @media ${device.lg} {
    font-size: 4.5rem;
  }
  @media ${device.xl} {
    font-size: 6rem;
  }
`;

const Suffix = styled(Prefix)`
  margin-left: 0.2rem;
  color: #000;
`;
