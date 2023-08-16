import { Icon } from "semantic-ui-react";
import s from "./nav.module.scss";
import { useState } from "react";
import Bars from "../../molecules/nav/bars/Bars";
import Open_closed from "../../molecules/nav/open_closed/Open_closed";

export default function Nav() {
  const [barsActive, setBarsActive] = useState(false);
  const [userActive, setUserActive] = useState(false);

  const toggleBarsBackground = () => {
    setBarsActive(!barsActive);
  };

  const toggleUserBackground = () => {
    setUserActive(!userActive);
  };

  return (
    <nav className={s.nav}>
      <div
        className={`${s.iconContainer} ${!barsActive ? s.customBackground : s.anotherCustomBackground}`}
        style={{ padding: "3px", borderRadius: "12px 12px 2px 0", }}
        onClick={toggleBarsBackground}
      >
        <Icon name="bars" size="big" />
      </div>
     {barsActive?<Bars onLinkClick={toggleBarsBackground} />:null}
      <div className={s.logo}>
      </div>
      <div
        className={`${s.iconContainer} ${!userActive ? s.customBackground : s.anotherCustomBackground}`}
        style={{ padding: "3px", borderRadius: "12px 12px 2px 0"}}
        onClick={toggleUserBackground}
      >
        <Icon name="user circle outline" size="big" />
      </div>
      {userActive?<Open_closed/>:null}
    </nav>
  );
}
