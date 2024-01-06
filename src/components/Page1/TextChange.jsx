import styled from "styled-components";
import { useTextChange } from "@/hook/useTextChange";
import { device } from "@/style/StyleGlobal";
import { showInLeft } from "../../style/animation";

export const TextChange = () => {
  const { prefix, suffix } = useTextChange();
  return (
    <ContainerText>
      <Prefix>{prefix}</Prefix>
      <Suffix>{suffix}</Suffix>
    </ContainerText>
  );
};

const ContainerText = styled.div`
  padding: .2rem;
  animation: ${showInLeft} 0.8s ease-in-out;
  @media ${device.sm} {
    height: 50%;
    width: 100%;
  }
`;
const Prefix = styled.span`
  color: ${(props) => props.theme.textShadow};
  text-shadow: 1px 2px 1px ${(props) => props.theme.textColor};
  display: inline-block;
  margin-right: 6px;
  font-weight: 400;
  font-size: 3rem;

  @media ${device.sm} {
    font-size: 3.2rem;
  }
  @media ${device.md} {
    font-size: 4rem;
  }
  @media ${device.lg} {
    font-size: 4.5rem;
  }
  @media ${device.xl} {
    font-size: 5rem;
  }
`;

const Suffix = styled(Prefix)`
  margin-right: 0px;
  color: ${(props) => props.theme.textColor};
  text-shadow: 1px 2px 1px ${(props) => props.theme.textShadow};
`;
