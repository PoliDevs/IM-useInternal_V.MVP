import Header from '../../molecules/Header/Header';
import Container from '../../atom/container/Container';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';
import LayoutSales from '../../molecules/layouts/sales/LayoutSales';

export default function Sales() {
  return (
    <Container>
        <Header icon="sales" title={"Ventas"} detail={"Aquí se encuentran tus ventas"} />
<LayoutContainer>
  <LayoutSales/>
</LayoutContainer>
    </Container>
  )
}
