import { SplitContentTopStyle, SplitContentMiddleStyle, SplitContentBottomStyle } from "../../../styles/home-style";
import image from "../../../assets/perfil.jpg";
import FlipLink from "../FlipLink";
import { SwitchLanguage } from "./SwitchLanguage";
import { BtnUnderline } from "../../../styles/buttons";
import { useLanguage } from "../../../hook/useContextProvider";

const RightSection = ({ handleCursorXs, handleCursorSmall, handleNavigation }) => {
  const { texts } = useLanguage();

  return (
    <>
      <SplitContentTopStyle $right>
        <SwitchLanguage />
      </SplitContentTopStyle>
      <SplitContentMiddleStyle $right>
        <img src={image} alt='perfil image' />
      </SplitContentMiddleStyle>
      <FlipLink $right fn={() => handleNavigation("projects")}>
        {texts.buttonProject}
      </FlipLink>
      <SplitContentBottomStyle $right>
        <p>Contacto</p>
        <hr />
        <div>
          <BtnUnderline
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            href='mailto:seebaasiman@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Email
          </BtnUnderline>
          <BtnUnderline
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            href='https://www.linkedin.com/in/sebasti%C3%A1nsiman/'
            target='_blank'
            rel='noopener noreferrer'
          >
            linkedin
          </BtnUnderline>
          <BtnUnderline
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            href='https://github.com/SeebaaSiman'
            target='_blank'
            rel='noopener noreferrer'
          >
            github
          </BtnUnderline>
        </div>
      </SplitContentBottomStyle>
    </>
  );
};

export default RightSection;
