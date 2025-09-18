import { CertificateCard } from "../components/CertificateCard";
import { useCustomCursorContext } from "../hook/useContextProvider";
import { dataCertificates } from "../services/data/dataCertificates";
import {
  CallToActionCard,
  CertificateContainer,
  CertificatePage,
  CertificatesGrid,
  HeaderCertificate,
  PrimaryButton,
} from "../styles/certificates-style";

const Certificates = () => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();
  const arrCertificates = dataCertificates();

  return (
    <CertificatePage>
      <CertificateContainer>
        <HeaderCertificate>
          <h1>Certificaciones Profesionales</h1>
          <p>
            Una colección de certificaciones que validan mi experiencia técnica y compromiso con el aprendizaje continuo
            en tecnologías de vanguardia.
          </p>
        </HeaderCertificate>

        <CertificatesGrid>
          {arrCertificates.map((cert) => (
            <CertificateCard {...{ cert, handleCursorXs, handleCursorSmall }} />
          ))}
        </CertificatesGrid>

        <CallToActionCard>
          <h3>¿Interesado en colaborar en mi desarrollo?</h3>
          <p>
            Estas certificaciones respaldan mi experiencia técnica. Estoy siempre dispuesto a aplicar estos
            conocimientos en proyectos desafiantes.
          </p>
          <PrimaryButton
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            href='mailto:seebaasiman@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contactar para crecer juntos
          </PrimaryButton>
        </CallToActionCard>
      </CertificateContainer>
    </CertificatePage>
  );
};

export default Certificates;
