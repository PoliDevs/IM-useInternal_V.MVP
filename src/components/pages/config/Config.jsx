import Header from '../../molecules/Header/Header';
import Container from '../../atom/container/Container';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';
import LayoutConfig from '../../molecules/layouts/config/LayoutConfig';
import { useTranslation } from "react-i18next";

export default function Config() {
  const [t,i18n]=useTranslation("global")
  return (
    <Container>
      <Header icon="config" 
      title={t("header.setting.text")} 
      detail={t("header.setting.detail")} />
      <LayoutContainer>
        <LayoutConfig/>
      </LayoutContainer>
    </Container>
  )
}
