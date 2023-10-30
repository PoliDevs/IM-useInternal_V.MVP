import Links from "../../../atom/Link/Link";
import s from "./bars.module.scss";
import { useTranslation } from "react-i18next";

export default function Bars({ onLinkClick}) {
  const [t,i18n]=useTranslation("global")

  return (
    <div className={s.containerd_bars}>
      <article>
        <Links to="/dashboard" onClick={onLinkClick} text={t("nav.operation screen")} icon={"store"} >
        </Links>
      </article>
      <article>
        <Links to="/menu" onClick={onLinkClick} text={t("nav.menu")} icon={"menu"}>
        </Links>
      </article>
      <article>
        <Links to="/sales" onClick={onLinkClick} text={t("nav.sales")} icon={"sales"}>
        </Links>
      </article>
      <article>
        <Links to="/history" onClick={onLinkClick} text={t("nav.history")} icon={"history"}>
        </Links>
      </article>
      <article>
        <Links to="/config" onClick={onLinkClick}  text={t("nav.setting")} icon={"config"}>
        </Links>
      </article>
      <article>
        <Links to="/QrGenerator" onClick={onLinkClick}  text={t("nav.qr")} icon={"qr"}>
        </Links>
      </article>
    </div>
  );
}
