import Header from "../../../molecules/Header/Header";
import LayoutContainer from "../../../molecules/layouts/section/LayoutContainer";
import LayoutDashboard from "../../../molecules/layouts/dashboard/LayoutDashboard";
import Container from "../../../atom/container/Container";

export default function OpenLocal() {
  return (
    <Container>
      <Header
        icon="store"
        title={"Pedidos recibidos"}
        detail={"Tus pedidos estan aqui por orden de ingreso"}
      />
      <LayoutContainer>
        <LayoutDashboard />
      </LayoutContainer>
    </Container>
  );
}
