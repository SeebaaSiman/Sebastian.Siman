import styled from "styled-components";

export const CertificatePage = styled.section`
  height: 90dvh;
  width: 100%;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 4rem 1rem;

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

export const CertificateContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const HeaderCertificate = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-left: 1rem;
  margin-bottom: 1.5rem;

    @media (min-width: 640px) {
      font-size: 3rem;
    }
  }
p{
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
}

`;



export const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CertificateCardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  /* padding: 0 1.5rem 1.5rem 1.5rem; */

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const CertificateCardHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`;

export const CertificateImage = styled.div`
  width: 100%;
  /* height: 12rem; */
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #f9fafb;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${CertificateCardContainer}:hover & img {
    transform: scale(1.06);
  }
`;

export const CardTitleSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitleContent = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  ${CertificateCardContainer}:hover & {
    color: #111827;
  }
`;

export const DateSection = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  margin-bottom: 0.5rem;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`;

export const Issuer = styled.p`
  color: #111827;
  font-weight: 600;
`;

export const CardContent = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

export const Description = styled.p`
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const SkillBadge = styled.span`
  background-color: rgba(5, 150, 105, 0.1);
  color: #111827;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #111827;
    color: #ffffff;
  }
`;

export const CredentialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #374151;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
cursor:none;
  &:hover {
    background-color: #111827;
    color: #ffffff;
    border-color: #111827;
  }

  ${CertificateCardContainer}:hover & {
    background-color: #111827;
    color: #ffffff;
    border-color: #111827;
  }
`;



export const CallToActionCard = styled.div`
  text-align: center;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PrimaryButton = styled.a`
  background-color: #111827;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;  cursor:none;
  text-decoration: none;
  text-transform: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffffff;
    color:#111827;
  }
  &:active{
    scale:0.95;
  }
`;
