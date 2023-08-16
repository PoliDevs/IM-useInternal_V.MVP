import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from 'react-i18next';

export default function Sales() {
  const [t,i18next]=useTranslation(["global"]);
  return (
    <div>
            <Header icon="chart bar" title={t("internal.nav.Sales")} detail={t("internal.header.sales.detail")} />
    </div>
  )
}
