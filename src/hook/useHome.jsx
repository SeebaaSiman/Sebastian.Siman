import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHorizontalSectionProvider, useLanguage } from "./useContextProvider";

export const useHome = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { handleScroll } = useHorizontalSectionProvider();
  const { texts } = useLanguage();
  const location = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (location === "/Sebastian.Siman/") {
      setIsAnimating(false);
    } else setIsAnimating(true);
  }, []);

  const handleSectionClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  const handleBack = () => {
    if (location.startsWith("/Sebastian.Siman/projects/")) {
      handleScroll(-50);
      navigate("/Sebastian.Siman/projects");
      return;
    }
    if (!isAnimating) return;
    setIsAnimating(false);
  };

  const handleTransitionEnd = () => {
    if (!isAnimating && location !== "/Sebastian.Siman/") {
      navigate("/Sebastian.Siman/");
    }
  };
  const isProjectDetail =
    location.startsWith("/Sebastian.Siman/projects/") && location.length > "/Sebastian.Siman/projects/".length;
  const textButton = isProjectDetail ? texts.buttonBack : texts.buttonHome;
  return { isAnimating, handleSectionClick, handleBack, handleTransitionEnd, textButton };
};
