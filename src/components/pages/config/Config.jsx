import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from 'react-i18next';
import Container from '../../atom/container/Container';
import LayoutContainer from '../../molecules/layouts/section/LayoutContainer';
import LayoutConfig from '../../molecules/layouts/config/LayoutConfig';

export default function Config() {
  const [t,i18next]=useTranslation(["global"]);
  return (
    <Container>
      <Header icon="cog" title={t("internal.nav.Setting")} detail={t("internal.header.setting.detail")} />
      <LayoutContainer>
        <LayoutConfig/>
      </LayoutContainer>
    </Container>
  )
}
