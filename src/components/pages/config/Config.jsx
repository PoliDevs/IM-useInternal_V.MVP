import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from 'react-i18next';

export default function Config() {
  const [t,i18next]=useTranslation(["global"]);
  return (
    <div>
      <Header icon="cog" title={t("internal.nav.Setting")} detail={t("internal.header.setting.detail")} />
    </div>
  )
}
