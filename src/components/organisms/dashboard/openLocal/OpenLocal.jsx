import s from './openLocal.module.scss';
import Header from '../../../molecules/Header/Header';
import { useTranslation } from "react-i18next";

export default function OpenLocal() {
  const [t, i18n] = useTranslation(["global"]);
  return <div className={s.container_open}>
    <Header icon="newspaper outline" title={t("internal.header.open local.orders received")}  detail={t("internal.header.open local.Your orders are here in order of entry")} />
    <section className={s.centered_content}>
      <div>
        <h2>Nuevos</h2>
        <div>content</div>
        </div>
      <div>
        <h2>Preparando</h2>
        <div>content</div>
        </div>
      <div>
        <h2>Listo</h2>
        <div>content</div>
      </div>
    </section>
  </div>
}
