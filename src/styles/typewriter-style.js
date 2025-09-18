import styled from "styled-components";
import { BlinkCarete } from "./animations";

export const TypewriterStyle = styled.div`
display: inline-block;
  width: 100%;
  font-family: "Boska", sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.85);


  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 50%;
    font-size: 28px;
  }
  span{
   border-right: 2px solid #fff;
  padding-right: 5px;
  animation: ${BlinkCarete} 1.3s step-end infinite;
  }
`