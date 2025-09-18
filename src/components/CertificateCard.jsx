import {
  CardContent,
  CertificateCardHeader,
  CardTitle,
  CardTitleContent,
  CardTitleSection,
  CertificateCardContainer,
  CertificateImage,
  CredentialButton,
  DateSection,
  Description,
  Issuer,
  SkillBadge,
  SkillsContainer,
} from "../styles/certificates-style";

export const CertificateCard = ({ cert, handleCursorXs, handleCursorSmall }) => {
  return (
    <CertificateCardContainer key={cert.id}>
      <CertificateCardHeader>
        {cert.image && (
          <CertificateImage>
            <img src={cert.image || "/placeholder.svg"} alt={`${cert.title} certificate`} />
          </CertificateImage>
        )}
        <CardTitleSection>
          <CardTitleContent>
            <CardTitle>{cert.title}</CardTitle>
            <DateSection>
              <span>{cert.date}</span>
            </DateSection>
            <Issuer>{cert.issuer}</Issuer>
          </CardTitleContent>
        </CardTitleSection>
      </CertificateCardHeader>

      <CardContent>
        <Description>{cert.description}</Description>

        <SkillsContainer>
          {cert.skills.map((skill) => (
            <SkillBadge key={skill} onMouseEnter={handleCursorXs} onMouseLeave={handleCursorSmall}>
              {skill}
            </SkillBadge>
          ))}
        </SkillsContainer>
      </CardContent>
    </CertificateCardContainer>
  );
};
