import Header from '../../molecules/Header/Header';
import Container from '../../atom/container/Container';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';
import LayoutConfig from '../../molecules/layouts/config/LayoutConfig';

export default function Config() {
  return (
    <Container>
      <Header icon="config" title={"Configuración"} detail={"Abre o cierra local"} />
      <LayoutContainer>
        <LayoutConfig/>
      </LayoutContainer>
    </Container>
  )
}
