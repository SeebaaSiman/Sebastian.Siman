import { useLanguage } from "../../../hook/useContextProvider";
import { BtnUnderline } from "../../../styles/buttons";
import { SplitContentTopStyle, SplitContentMiddleStyle, SplitContentBottomStyle } from "../../../styles/home-style";
import FlipLink from "../FlipLink";
import { Freelancer } from "./Freelancer";
import TypewriterEffect from "./TypewriterEffect";

const LeftSection = ({ handleCursorXs, handleCursorSmall, handleNavigation }) => {
  const { texts } = useLanguage();

  return (
    <>
      <SplitContentTopStyle>
        <Freelancer text1={texts.freelance} text2={texts.freelanceLimit} />
      </SplitContentTopStyle>
      <SplitContentMiddleStyle>
        <TypewriterEffect developer={texts.developer} />
      </SplitContentMiddleStyle>
      <FlipLink fn={() => handleNavigation("about")}>{texts.buttonAbout}</FlipLink>
      <SplitContentBottomStyle>
        <p>Información </p>
        <hr />
        <div>
          <BtnUnderline
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={() => handleNavigation("certificates")}
            target='_blank'
            rel='noopener noreferrer'
          >
            certificados
          </BtnUnderline>
          <BtnUnderline
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={() => handleNavigation("CV")}
            target='_blank'
            rel='noopener noreferrer'
          >
            cv
          </BtnUnderline>
        </div>
      </SplitContentBottomStyle>
    </>
  );
};

export default LeftSection;
