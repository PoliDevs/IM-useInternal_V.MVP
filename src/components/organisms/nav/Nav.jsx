import s from "./nav.module.scss";
import { useState } from "react";
import Bars from "../../molecules/nav/bars/Bars";
import Open_closed from "../../molecules/nav/open_closed/Open_closed";
import { Bars_3, User_cicle } from "../../atom/iconsHerocoins/icons";
import logoNav from "../../../assets/logo nav.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  const [barsActive, setBarsActive] = useState(false);
  const [userActive, setUserActive] = useState(false);

  //cambia el fondo de los iconos
  const toggleBarsBackground = () => {
    userActive && setUserActive(false);
    setBarsActive(!barsActive);
  };
  const handleBlur = () => {
    if (barsActive) {
      setTimeout(() => setBarsActive(false), [100]);
      
    }
  };
  const handleBlurUser = () => {
    if (userActive) {
      setTimeout(() => setUserActive(false), [250]);
    }
  };
  //cambia el fondo de los iconos
  const toggleUserBackground = async () => {
    barsActive && setBarsActive(false);
    setUserActive(!userActive);
  };

  return (
    <nav className={s.nav} onFocus={handleBlur}>
      <div
        className={`${s.iconContainer} ${
          !barsActive ? s.customBackground : s.anotherCustomBackground
        }`}
        onClick={toggleBarsBackground}
        onBlur={handleBlur}
        tabIndex={0} // Añade tabIndex para que el contenedor pueda recibir el enfoque
      >
        <Bars_3 heigth={36} />
        {barsActive ? <Bars onLinkClick={toggleBarsBackground} /> : null}
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <Link to={"/dashboard"}>
          <img src={logoNav} className={s.logo} />
        </Link>
      </div>
      <div
        className={`${s.iconContainer} ${
          !userActive ? s.customBackground : s.anotherCustomBackground
        }`}
        onClick={toggleUserBackground}
        onBlur={handleBlurUser}
        tabIndex={0} // Añade tabIndex para que el contenedor pueda recibir el enfoque
      >
        <User_cicle heigth={36} />
      </div>
      {userActive ? (
        <Open_closed
          handlestate={toggleUserBackground}
          //onBlur={toggleUserBackground}
        />
      ) : null}
    </nav>
  );
}
