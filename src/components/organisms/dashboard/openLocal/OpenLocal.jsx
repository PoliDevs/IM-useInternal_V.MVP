import s from './openLocal.module.scss';
import Header from '../../../molecules/Header/Header';
import { useTranslation } from "react-i18next";
import LayoutContainer from '../../../molecules/layouts/section/LayoutContainer';
import LayoutDashboard from '../../../molecules/layouts/dashboard/LayoutDashboard';

export default function OpenLocal() {
  const [t, i18n] = useTranslation(["global"]);
  return <div className={s.container_open}>
    <Header icon="newspaper outline" title={t("internal.header.open local.orders received")}  detail={t("internal.header.open local.Your orders are here in order of entry")} />
    <LayoutContainer>
      <LayoutDashboard/>
    </LayoutContainer>
  </div>
}