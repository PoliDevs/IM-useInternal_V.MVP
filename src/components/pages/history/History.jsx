import React from 'react';
import Header from '../../molecules/Header/Header';
import { useTranslation } from "react-i18next";

export default function History() {
  const [t, i18n] = useTranslation(["global"]);
  return (
    <div>
      <Header icon="clock outline" title={t("internal.nav.History")} detail={t("internal.header.history.detail")} />
    </div>
  )
}
