import React from "react";
import { Link } from "react-router-dom";
import s from "./bars.module.scss";
import { Icon } from "semantic-ui-react";

export default function Bars({onLinkClick}) {
  const handleLink=()=>{
    onLinkClick()
  }

  return (
    <div className={s.containerd_bars}>
      <article>
        <Icon name="warehouse" />
        <Link to="/dashboard" onClick={handleLink}>Pantalla de operación</Link>
      </article>
      <article>
        <Icon name="newspaper outline" />
        <Link to="/menu" onClick={handleLink}>Menú</Link>
      </article>
      <article>
        <Icon name="chart bar" />
        <Link to="/sales" onClick={handleLink}>Ventas</Link>
      </article>
      <article>
        <Icon name="clock outline" />
        <Link to="/history" onClick={handleLink}>Historial</Link>
      </article>
      <article>
        <Icon name="cog" />
        <Link to="/config" onClick={handleLink}>Configuración</Link>
      </article>
    </div>
  );
}
