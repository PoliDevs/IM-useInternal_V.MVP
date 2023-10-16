import Header from "../../molecules/Header/Header";
import Container from "../../atom/container/Container";
import LayoutContainer from "../../molecules/layouts/section/LayoutContainer";
import LayoutHistory from "../../molecules/layouts/history/LayoutHistory";

export default function History() {
  return (
    <Container>
      <Header
        icon="history"
        title={"Historial"}
        detail={"Aquí están tus pedidos entregados"}
      />
      <LayoutContainer>
        <LayoutHistory />
      </LayoutContainer>
    </Container>
  );
}
