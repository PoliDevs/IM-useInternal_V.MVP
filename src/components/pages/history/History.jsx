import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from "react-i18next";
import Container from '../../atom/container/Container';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';
import LayoutHistory from '../../molecules/layouts/history/LayoutHistory';


export default function History() {
  const [t, i18n] = useTranslation(["global"]);
  return (
    <Container>
      <Header icon="clock outline" title={t("internal.nav.History")} detail={t("internal.header.history.detail")} />
      <LayoutContainer>
        <LayoutHistory/>
      </LayoutContainer>
    </Container>
  )
}
