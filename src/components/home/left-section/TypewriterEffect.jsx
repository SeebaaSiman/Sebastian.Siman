import { useTypewriterEffect } from "../../../hook/useTypewriterEffect";
import { TypewriterStyle } from "../../../styles/typewriter-style";

function TypewriterEffect({ developer }) {
  const { text } = useTypewriterEffect(developer);
  return (
    <TypewriterStyle>
      <span>{text}</span>
    </TypewriterStyle>
  );
}
export default TypewriterEffect;
