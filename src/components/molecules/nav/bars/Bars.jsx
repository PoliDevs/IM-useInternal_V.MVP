import Links from "../../../atom/Link/Link";
import s from "./bars.module.scss";
import { useTranslation } from "react-i18next";
import { ReactComponent as Logo } from "../../../../assets/logo_disable_svg.svg";

export default function Bars({ onLinkClick }) {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className={s.containerd_bars}
      onClick={onLinkClick}
    >
      <article>
        <Links
          to="/dashboard"
          onClick={onLinkClick}
          text={t("nav.operation screen")}
          icon={"store"}
        ></Links>
      </article>
      <article>
        <Links
          to="/menu"
          onClick={onLinkClick}
          text={t("nav.menu")}
          icon={"menu"}
        ></Links>
      </article>
      <article>
        <Links
          to="/sales"
          onClick={onLinkClick}
          text={t("nav.sales")}
          icon={"sales"}
        ></Links>
      </article>
      <article>
        <Links
          to="/history"
          onClick={onLinkClick}
          text={t("nav.history")}
          icon={"history"}
        ></Links>
      </article>
      <article>
        <Links
          to="/config"
          onClick={onLinkClick}
          text={t("nav.setting")}
          icon={"config"}
        ></Links>
      </article>
      <article>
        <Links
          to="/QrGenerator"
          onClick={onLinkClick}
          text={t("nav.qr")}
          icon={"qr"}
        ></Links>
      </article>
      <article>
        <Links
          to="/"
          onClick={onLinkClick}
          text={t("Salir")}
          icon={"logout"}
        ></Links>
      </article>
      <div
        style={{
          display: "flex",
          height: "30px",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Logo
          style={{
            width: "60px",
            height: "60px",
            marginLeft: "20px",
          }}
        />
        <p
          style={{
            color: "#BABABA",
            fontSize: "22px",
            margin: "0",
            padding: "0",
          }}
        >
          |
        </p>
        <p
          style={{
            color: "#FF4747",
            fontSize: "15px",
            margin: "0",
            padding: "0",
          }}
        >
          Versión mvp
        </p>
      </div>
    </div>
  );
}
