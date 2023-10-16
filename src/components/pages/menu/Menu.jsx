import Header from '../../molecules/Header/Header';
import Container from '../../atom/container/Container';
import LayoutMenu from '../../molecules/layouts/menu/LayoutMenu';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';

export default function Menu() {
  return (
    <Container>
      <Header icon="menu" title={"Menú"} detail={"Gestiona tu menú desde aquí"} />
      <LayoutContainer>
      <LayoutMenu/>
      </LayoutContainer>
    </Container>
  )
}
