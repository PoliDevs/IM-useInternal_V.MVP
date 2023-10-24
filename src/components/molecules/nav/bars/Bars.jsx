import Links from "../../../atom/Link/Link";
import s from "./bars.module.scss";

export default function Bars({ onLinkClick}) {

  return (
    <div className={s.containerd_bars}>
      <article>
        <Links to="/dashboard" onClick={onLinkClick} text={"Pantalla de operación"} icon={"store"} >
        </Links>
      </article>
      <article>
        <Links to="/menu" onClick={onLinkClick} text={"Menú"} icon={"menu"}>
        </Links>
      </article>
      <article>
        <Links to="/sales" onClick={onLinkClick} text={"Ventas"} icon={"sales"}>
        </Links>
      </article>
      <article>
        <Links to="/history" onClick={onLinkClick} text={"Historial"} icon={"history"}>
        </Links>
      </article>
      <article>
        <Links to="/config" onClick={onLinkClick}  text={"Configuración"} icon={"config"}>
        </Links>
      </article>
    </div>
  );
}
