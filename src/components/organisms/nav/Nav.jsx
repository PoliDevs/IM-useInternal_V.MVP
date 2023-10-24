import s from "./nav.module.scss";
import { useState } from "react";
import Bars from "../../molecules/nav/bars/Bars";
import Open_closed from "../../molecules/nav/open_closed/Open_closed";
import { Bars_3, User_cicle } from "../../atom/iconsHerocoins/icons";
import logo from "../../../assets/logo_imenu_blanco.png"
import logoNav from "../../../assets/logo nav.svg"

export default function Nav() {
  const [barsActive, setBarsActive] = useState(false);
  const [userActive, setUserActive] = useState(false);

  //cambia el fondo de los iconos
  const toggleBarsBackground = () => {
    userActive && setUserActive(false);
    setBarsActive(!barsActive);
  };
  //cambia el fondo de los iconos
  const toggleUserBackground = async () => {
    barsActive && setBarsActive(false);
    setUserActive(!userActive);
  };

  return (
    <nav className={s.nav}>
      <div
        className={`${s.iconContainer} ${
          !barsActive ? s.customBackground : s.anotherCustomBackground
        }`}
        onClick={toggleBarsBackground}
      >
        <Bars_3 heigth={36} />
      </div>
      {barsActive ? <Bars onLinkClick={toggleBarsBackground}/> : null}
      <div>
      <img src={logoNav} className={s.logo}></img>
      </div>
      <div
        className={`${s.iconContainer} ${
          !userActive ? s.customBackground : s.anotherCustomBackground
        }`}
        onClick={toggleUserBackground}
      >
        <User_cicle heigth={36} />
      </div>
      {userActive ? <Open_closed onBlur={toggleUserBackground} /> : null}
    </nav>
  );
}
