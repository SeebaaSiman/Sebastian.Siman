import styled from "styled-components";
import { useTextChange } from "../../hook/useTextChange";

export const TextChange = () => {
  const { prefix, suffix } = useTextChange();
  return (
    <div>
      <Prefix>{prefix}</Prefix>
      <Suffix>{suffix}</Suffix>
    </div>
  );
};
const Container = styled.div`
  width: 100%;
`;
const Prefix = styled.span`
  color: #ffffff;
  text-shadow: 3px 5px 2px #474747;
  display: inline-block;
  margin-right: 0.2rem;
  font-size: calc(3rem + 50%);
  font-weight: 400;
`;

const Suffix = styled(Prefix)`
  margin-left: 0.2rem;
  color: #b3ff00;
`;
