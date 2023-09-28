import Header from "../../../molecules/Header/Header";
import { useTranslation } from "react-i18next";
import LayoutContainer from "../../../molecules/layouts/section/LayoutContainer";
import LayoutDashboard from "../../../molecules/layouts/dashboard/LayoutDashboard";
import Container from "../../../atom/container/Container";
import { useSelector } from "react-redux";
import ClosedLocal from "../closedLocal/ClosedLocal";

export default function OpenLocal() {
  const [t, i18n] = useTranslation(["global"]);
  const localOpenValue = useSelector((state) => state.localOpenValue);
  return (
    <Container>
      {localOpenValue ? (
        <Header
          icon="newspaper outline"
          title={t("internal.header.open local.orders received")}
          detail={t(
            "internal.header.open local.Your orders are here in order of entry"
          )}
        />
      ) : (
        <ClosedLocal/>
      )}
      <LayoutContainer>
        <LayoutDashboard />
      </LayoutContainer>
    </Container>
  );
}
