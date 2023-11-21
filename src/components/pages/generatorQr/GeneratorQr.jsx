import Header from '../../molecules/Header/Header';
import Container from '../../atom/container/Container';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';
import QrGenerator from '../../molecules/QrCodeGenerator/QrCodeGenerator';
import { useTranslation } from "react-i18next";

export default function GeneratorQr() {
    const [t,i18n]=useTranslation("global");
  return (
    <Container>
      <Header 
      icon="qr" 
      title={t("header.generator qr.text")} 
      detail={t("header.generator qr.detail")} />
      <LayoutContainer>
        <QrGenerator/>
      </LayoutContainer>
    </Container>
  )
}