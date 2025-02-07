import SplitSection from "../components/SplitSection";
import TypewriterEffect from "../components/TypewriterEffect";
import FlipLink from "../components/FlipLink";
import image from "../assets/perfil.jpg";
import { useHome } from "../hook/useHome";
import { useCustomCursorContext, useLanguage } from "../hook/useContextProvider";
import { Freelancer } from "../components/Freelancer";
import { SwitchLanguage } from "../components/SwitchLanguage";
import { Suspense } from "react";
import Loader from "../components/loader";

const Home = ({ deviceType }) => {
  const { isAnimating, handleSectionClick, handleBack, renderSection } = useHome();
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();
  const { texts } = useLanguage();

  const leftsection = (
    <>
      <section className='split-content-top'>
        <Freelancer text1={texts.freelance} text2={texts.freelanceLimit} />
      </section>
      <section className='split-content-middle left'>
        <TypewriterEffect developer={texts.developer} />
      </section>
      <FlipLink textclass='left' fn={() => handleSectionClick("about")}>
        {texts.buttonAbout}
      </FlipLink>
      <section className='split-content-bottom left-content'>
        <hr />
        <a
          href='mailto:seebaasiman@gmail.com'
          className='btn-underline scale-up-bottom-left '
          onMouseEnter={handleCursorXs}
          onMouseLeave={handleCursorSmall}
        >
          Email
        </a>
      </section>
    </>
  );
  const rightsection = (
    <>
      <section className='split-content-top right-content '>
        <SwitchLanguage />
      </section>
      <section className='split-content-middle right'>
        <img src={image} alt='perfil image' className='image-home' />
      </section>
      <FlipLink textclass='right' fn={() => handleSectionClick("project")} text={"text"}>
        {texts.buttonProject}
      </FlipLink>
      <section className='split-content-bottom'>
        <hr />
        <div>
          <a
            className='btn-underline scale-up-bottom'
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            href='https://www.linkedin.com/in/sebasti%C3%A1nsiman/'
            target='_blank'
            rel='noopener noreferrer'
          >
            linkedin
          </a>
          <a
            className='btn-underline scale-up-bottom-right'
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            href='https://github.com/SeebaaSiman'
            target='_blank'
            rel='noopener noreferrer'
          >
            github
          </a>
        </div>
      </section>
    </>
  );
  return (
    <main className={`home-container ${deviceType === "desktop" && "idle-cursor"}`}>
      <SplitSection direction='left' isOpen={isAnimating}>
        {leftsection}
      </SplitSection>
      <SplitSection direction='right' isOpen={isAnimating}>
        {rightsection}
      </SplitSection>

      <div className={`home-back ${isAnimating ? "active" : ""}`}>
        <button
          onClick={handleBack}
          className='btn-neumorphism top-left'
          onMouseEnter={handleCursorXs}
          onMouseLeave={handleCursorSmall}
        >
          {texts.buttonHome}
        </button>
        <Suspense fallback={<Loader />}>{renderSection()}</Suspense>
      </div>
    </main>
  );
};

export default Home;
