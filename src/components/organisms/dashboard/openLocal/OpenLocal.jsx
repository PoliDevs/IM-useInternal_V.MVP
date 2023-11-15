import Header from "../../../molecules/Header/Header";
import LayoutContainer from "../../../molecules/layouts/section/LayoutContainer";
import LayoutDashboard from "../../../molecules/layouts/dashboard/LayoutDashboard";
import Container from "../../../atom/container/Container";
import { useTranslation } from "react-i18next";

export default function OpenLocal() {
  const [t, i18n] = useTranslation("global");
  return (
    <Container>
      <Header
        icon="store"
        title={t("header.open local.orders received")}
        detail={t("header.open local.your orders are here in order of entry")}
      />
      <LayoutContainer>
        <LayoutDashboard />
      </LayoutContainer>
    </Container>
  );
}
