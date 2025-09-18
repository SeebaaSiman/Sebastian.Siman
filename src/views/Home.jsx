import { Outlet, useNavigate } from "react-router-dom";
import SplitSection from "../components/home/SplitSection";
import LeftSection from "../components/home/left-section";
import RightSection from "../components/home/right-section";

import { useHome } from "../hook/useHome";
import { useCustomCursorContext } from "../hook/useContextProvider";
import useDeviceType from "../hook/useDeviceType";
import { HomeOutletStyle, HomeStyle } from "../styles/home-style";
import { BtnGlass } from "../components/BtnGlass";
import { NavOutlet } from "../components/NavOutlet";

const Home = () => {
  const deviceType = useDeviceType();

  const navigate = useNavigate();
  const { isAnimating, handleSectionClick, handleBack, handleTransitionEnd, textButton } = useHome();

  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();
  const handleNavigation = (path) => {
    handleSectionClick();
    navigate(path);
  };

  return (
    <HomeStyle className={` ${deviceType === "desktop" && "idle-cursor"}`}>
      <SplitSection direction='left' isOpen={isAnimating} handleTransitionEnd={handleTransitionEnd}>
        <LeftSection {...{ handleCursorXs, handleCursorSmall, handleNavigation }} />
      </SplitSection>
      <SplitSection direction='right' isOpen={isAnimating} handleTransitionEnd={handleTransitionEnd}>
        <RightSection {...{ handleCursorXs, handleCursorSmall, handleNavigation }} />
      </SplitSection>

      <HomeOutletStyle className={`${isAnimating ? "active" : ""}`}>
        <NavOutlet {...{ handleBack, textButton }} />
        <Outlet />
      </HomeOutletStyle>
    </HomeStyle>
  );
};

export default Home;
