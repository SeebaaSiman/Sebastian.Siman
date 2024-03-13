import { useTextChange } from "@/hook/useTextChange";
import { ContainerText, Prefix, Suffix } from "/src/style/page1Styles";

export const TextChange = () => {
  const { prefix, suffix } = useTextChange();

  return (
    <ContainerText>
      <Prefix>{prefix}</Prefix>
      <Suffix>{suffix}</Suffix>
    </ContainerText>
  );
};
