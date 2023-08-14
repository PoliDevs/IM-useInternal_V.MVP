import { Icon } from "semantic-ui-react";
import s from "./nav.module.scss";
import { useState } from "react";
import Bars from "./bars/Bars";
import Open_closed from "./open_closed/Open_closed";

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
        <Icon name="bars" size="large" />
      </div>
     {barsActive?<Bars onLinkClick={toggleBarsBackground} />:null}
      <>
        <span>
          {`i m e n ú `}
          <Icon name="cloud" className={s.cloud} />
        </span>
      </>
      <div
        className={`${s.iconContainer} ${!userActive ? s.customBackground : s.anotherCustomBackground}`}
        style={{ padding: "3px", borderRadius: "12px 12px 2px 0" }}
        onClick={toggleUserBackground}
      >
        <Icon name="user circle outline" size="large" />
      </div>
      {userActive?<Open_closed/>:null}
    </nav>
  );
}
