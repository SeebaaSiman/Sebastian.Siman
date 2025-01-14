import OppositeScrollColumns from "../components/OppositeScrollColumns";
import { useLanguage } from "../hook/useContextProvider";
import setup from "../assets/bg/setup.jpg";
import ginasia from "../assets/bg/ginasia.jpg";
import code from "../assets/bg/code.jpg";
const About = () => {
  const { texts } = useLanguage();

  const arr1 = [<p> {texts.speech1}</p>, <img src={code} alt='code' loading='lazy' />, <p>{texts.speech2}</p>];
  const arr2 = [
    <img src={ginasia} alt='grass' loading='lazy' />,
    <p> {texts.speech3}</p>,
    <img src={setup} alt='setup' loading='lazy' />,
  ];

  return <OppositeScrollColumns arrLeft={arr1} arrRight={arr2} />;
};

export default About;
