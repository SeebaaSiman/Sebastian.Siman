import { FreelancerStyle, FreelancePulseContainer } from "../../../styles/freelancer-style.js";
export const Freelancer = ({ text1, text2 }) => {
  return (
    <FreelancerStyle>
      <h1>Sebastián Siman</h1>
      <p>{text1}</p>
      <FreelancePulseContainer>
        <span>
          <div />
        </span>
        <p>{text2}</p>
      </FreelancePulseContainer>
    </FreelancerStyle>
  );
};
