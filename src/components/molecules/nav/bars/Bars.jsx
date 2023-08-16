import React from "react";
import { Link } from "react-router-dom";
import s from "./bars.module.scss";
import { Icon } from "semantic-ui-react";
import { useTranslation} from "react-i18next";

export default function Bars({onLinkClick}) {
  const handleLink=()=>{
    onLinkClick()
  }
  const [t, i18n] = useTranslation("global");

  return (
    <div className={s.containerd_bars}>
      <article>
        <Icon name="warehouse" />
        {/* <b>{t("reviews.Write your review")}</b> */}
        <Link to="/dashboard" onClick={handleLink}> {t("internal.nav.operation screen")}</Link>
      </article>
      <article>
        <Icon name="newspaper outline" />
        <Link to="/menu" onClick={handleLink}>{t("internal.nav.Menu")}</Link>
      </article>
      <article>
        <Icon name="chart bar" />
        <Link to="/sales" onClick={handleLink}>{t("internal.nav.Sales")}</Link>
      </article>
      <article>
        <Icon name="clock outline" />
        <Link to="/history" onClick={handleLink}>{t("internal.nav.History")}</Link>
      </article>
      <article>
        <Icon name="cog" />
        <Link to="/config" onClick={handleLink}>{t("internal.nav.Setting")}</Link>
      </article>
    </div>
  );
}
