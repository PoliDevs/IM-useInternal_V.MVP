import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from 'react-i18next';
import Container from '../../atom/container/Container';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';
import LayoutSales from '../../molecules/layouts/sales/LayoutSales';

export default function Sales() {
  const [t,i18next]=useTranslation(["global"]);
  return (
    <Container>
        <Header icon="chart bar" title={t("internal.nav.Sales")} detail={t("internal.header.sales.detail")} />
<LayoutContainer>
  <LayoutSales/>
</LayoutContainer>
    </Container>
  )
}
