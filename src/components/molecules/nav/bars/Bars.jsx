import Links from "../../../atom/Link/Link";
import s from "./bars.module.scss";
import { Store,History,Sales,Config,Menu } from "../../../atom/iconsHerocoins/icons";

export default function Bars({ onLinkClick}) {

  return (
    <div className={s.containerd_bars}>
      <article>
        <Store />
        <Links to="/dashboard" onClick={onLinkClick}>
          Pantalla de operación
        </Links>
      </article>
      <article>
        <Menu/>
        <Links to="/menu" onClick={onLinkClick}>
          Menu
        </Links>
      </article>
      <article>
        <Sales/>
        <Links to="/sales" onClick={onLinkClick}>
          Ventas
        </Links>
      </article>
      <article>
        <History/>
        <Links to="/history" onClick={onLinkClick}>
          Historial
        </Links>
      </article>
      <article>
        <Config/>
        <Links to="/config" onClick={onLinkClick}>
          Configuración
        </Links>
      </article>
    </div>
  );
}
