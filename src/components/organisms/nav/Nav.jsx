import { Icon } from "semantic-ui-react";
import s from "./nav.module.scss";
import { useState } from "react";
import Bars from "../../molecules/nav/bars/Bars";
import Open_closed from "../../molecules/nav/open_closed/Open_closed";
import { useDispatch, useSelector } from "react-redux";
import { Bars_3, User_cicle } from "../../atom/iconsHerocoins/icons";

export default function Nav() {
  const [barsActive, setBarsActive] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders);
  /*   console.log(orders) */
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
        style={{ padding: "3px", borderRadius: "12px 12px 2px 0" }}
        onClick={toggleBarsBackground}
      >
        {/* <Icon name="bars" size="big" /> */}
        <Bars_3 heigth={36} />
      </div>
      {barsActive ? <Bars onLinkClick={toggleBarsBackground} /> : null}
      <div className={s.logo}>
      <img src="/src/assets/logo_imenu_blanco.png" height={52} ></img>
      </div>
      <div
        className={`${s.iconContainer} ${
          !userActive ? s.customBackground : s.anotherCustomBackground
        }`}
        style={{ padding: "3px", borderRadius: "12px 12px 2px 0" }}
        onClick={toggleUserBackground}
      >
        <User_cicle heigth={36} />
      </div>
      {userActive ? <Open_closed /> : null}
    </nav>
  );
}
