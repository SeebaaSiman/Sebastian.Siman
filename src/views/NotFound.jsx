import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BtnGlass } from "../components/BtnGlass";
import useDeviceType from "../hook/useDeviceType";
import { useCustomCursorContext, useLanguage } from "../hook/useContextProvider";
const NotFound = () => {
  const { texts } = useLanguage();
  const overlayRef = useRef();
  const deviceType = useDeviceType();
  const { handleCursorXs } = useCustomCursorContext();
  const navigate = useNavigate();
  useEffect(() => {
    handleCursorXs();
  }, []);

   useEffect(() => {
    const handleMove = (e) => {
      if (!overlayRef.current) return;
      if (!deviceType === "desktop") return;
      const x = e.clientX;
      const y = e.clientY;
      if (overlayRef.current) {
        overlayRef.current.style.maskImage = `radial-gradient(circle 100px at ${x}px ${y}px, transparent 0 80px, rgba(0,0,0,0.85) 120px)`;
        overlayRef.current.style.webkitMaskImage = `radial-gradient(circle 100px at ${x}px ${y}px, transparent 0 80px, rgba(0,0,0,0.85) 120px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  const OnBack = () => {
    navigate("/Sebastian.Siman/");
  };
  return (
    <NotFoundStyle>
      {deviceType === "desktop" && <NotFoundOverlay ref={overlayRef} />}
      <h1>{texts.titleError}</h1>
      <p>{texts.subtitleError}</p>
      <BtnGlass fn={OnBack} $notfound>
        {texts.buttonError}
      </BtnGlass>
    </NotFoundStyle>
  );
};
export default NotFound;

export const NotFoundStyle = styled.main`
  padding: 2rem;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100dvh;
  background-color: #111827;
  color: #e6e4e2;
  cursor: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h1 {
    font-size: 11vw;
  }
  p {
    font-size: 6vw;
  }
`;
export const NotFoundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  pointer-events: none;
  z-index: 2;
  transition: mask-image 0.2s, -webkit-mask-image 0.2s;
`;
