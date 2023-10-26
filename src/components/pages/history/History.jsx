import Header from "../../molecules/Header/Header";
import Container from "../../atom/container/Container";
import LayoutContainer from "../../molecules/layouts/section/LayoutContainer";
import LayoutHistory from "../../molecules/layouts/history/LayoutHistory";
import { useTranslation } from "react-i18next";
export default function History() {
  const [t,i18n]=useTranslation("global")
  return (
    <Container>
      <Header
        icon="history"
        title={t("header.history.text")}
        detail={t("header.history.detail")}
      />
      <LayoutContainer>
        <LayoutHistory />
      </LayoutContainer>
    </Container>
  );
}
