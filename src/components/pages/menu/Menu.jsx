import Header from "../../molecules/Header/Header";
import Container from "../../atom/container/Container";
import LayoutMenu from "../../molecules/layouts/menu/LayoutMenu";
import LayoutContainer from "../../molecules/layouts/section/LayoutContainer";
import { useTranslation } from "react-i18next";
export default function Menu() {
  const [t, i18n] = useTranslation("global");
  return (
    <Container>
      <Header
        icon="menu"
        title={t("header.menu.text")}
        detail={t("header.menu.detail")}
      />
      <LayoutContainer>
        <LayoutMenu />
      </LayoutContainer>
    </Container>
  );
}
