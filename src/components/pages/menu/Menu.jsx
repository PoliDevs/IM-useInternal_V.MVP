import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from 'react-i18next';
import Container from '../../atom/container/Container';

export default function Menu() {
  const [t, i18n] = useTranslation(["global"]);
  return (
    <Container>
      <Header icon="newspaper outline" title={t("internal.nav.Menu")} detail={t("internal.header.menu.detail")} />
    </Container>
  )
}
