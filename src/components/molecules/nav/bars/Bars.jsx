import Links from "../../../atom/Link/Link";
import s from "./bars.module.scss";
import { Store,History,Sales,Config,Menu } from "../../../atom/iconsHerocoins/icons";

export default function Bars({ onLinkClick}) {
  const handleLink = () => {
    onLinkClick();

  };

  return (
    <div className={s.containerd_bars}>
      <article>
        <Store />
        <Links to="/dashboard" onClick={handleLink}>
          Pantalla de operación
        </Links>
      </article>
      <article>
        <Menu/>
        <Links to="/menu" onClick={handleLink}>
          Menu
        </Links>
      </article>
      <article>
        <Sales/>
        <Links to="/sales" onClick={handleLink}>
          Ventas
        </Links>
      </article>
      <article>
        <History/>
        <Links to="/history" onClick={handleLink}>
          Historial
        </Links>
      </article>
      <article>
        <Config/>
        <Links to="/config" onClick={handleLink}>
          Configuración
        </Links>
      </article>
    </div>
  );
}
