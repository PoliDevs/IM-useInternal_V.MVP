import Header from "../../molecules/Header/Header";
import Container from "../../atom/container/Container";
import LayoutContainer from "../../molecules/layouts/section/LayoutContainer";
import LayoutSales from "../../molecules/layouts/sales/LayoutSales";
import { useTranslation } from "react-i18next";
export default function Sales() {
  const [t, i18n] = useTranslation("global");
  return (
    <Container>
      <Header
        icon="sales"
        title={t("header.sales.text")}
        detail={t("header.sales.detail")}
      />
      <LayoutContainer>
        <LayoutSales />
      </LayoutContainer>
    </Container>
  );
}
