import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const [t, i18n] = useTranslation(["global"]);
  return (
    <div>
      <Header icon="newspaper outline" title={t("internal.nav.Menu")} detail={t("internal.header.menu.detail")} />
    </div>
  )
}
