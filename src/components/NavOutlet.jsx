import { useLocation } from "react-router-dom";
import { BtnGlass } from "./BtnGlass";
import styled from "styled-components";

export const NavOutlet = ({ handleBack, textButton }) => {
  const location = useLocation().pathname;
  return (
    <NavOutletStyle>
      <BtnGlass fn={handleBack}>{textButton}</BtnGlass>
      <p>{location}</p>
    </NavOutletStyle>
  );
};
const NavOutletStyle = styled.div`
  width: 100%;
  height: 10vh;
  font-family: "Bebas Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /* background-color: blue; */
`;
