import setup from "../assets/bg/setup.jpg";
import ginasia from "../assets/bg/ginasia.jpg";
import code from "../assets/bg/code.jpg";
import "../styles/about-style.css";
import { useMemo } from "react";

import { useLanguage } from "../hook/useContextProvider";
import OppositeScrollColumns from "../components/OppositeScrollColumns";

const About = () => {
  const { texts } = useLanguage();

  const arr1 = useMemo(
    () => [<p> {texts.speech1}</p>, <img src={code} alt='code' loading='lazy' />, <p>{texts.speech2}</p>],
    [texts]
  );
  const arr2 = useMemo(
    () => [
      <img src={ginasia} alt='grass' loading='lazy' />,
      <p> {texts.speech3}</p>,
      <img src={setup} alt='setup' loading='lazy' />,
    ],
    [texts]
  );
  return <OppositeScrollColumns arrLeft={arr1} arrRight={arr2} />;
};

export default About;
