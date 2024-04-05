import s from "./nav.module.scss";
import { useState,useRef,useEffect } from "react";
import Bars from "../../molecules/nav/bars/Bars";
import Open_closed from "../../molecules/nav/open_closed/Open_closed";
import { Bars_3, Store, StoreClosed } from "../../atom/iconsHerocoins/icons";
import logoNav from "../../../assets/logo nav.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export default function Nav() {
  const [barsActive, setBarsActive] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const barsContainerRef = useRef(null);
  const userContainerRef = useRef(null);
  const location = useLocation();

  const localValue = useSelector((state) => state.localOpenValue);

  const disableNavbar = location.pathname.includes("/instructions");

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

  const handleDocumentClick = (event) => {
    if (barsContainerRef.current && !barsContainerRef.current.contains(event.target)) {
      setBarsActive(false);
    }

    if (userContainerRef.current && !userContainerRef.current.contains(event.target)) {
      setTimeout(() => setUserActive(false), [250]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);


  return (
    <nav className={`${s.nav} ${disableNavbar ? s.disableNav : ""}`}>
      <div
        ref={barsContainerRef}
        className={`${s.iconContainer} ${
        !barsActive ? s.customBackground : s.anotherCustomBackground
        }`}
        onClick={toggleBarsBackground}
      >
        <Bars_3 heigth={36}/>
      </div>
        {barsActive ? <Bars onLinkClick={toggleBarsBackground}/> : null}
        <Link to={"/dashboard"}>
          <img src={logoNav} className={s.logo} />
        </Link>
      <div
        className={`${s.iconContainer} ${
          !userActive ? s.customBackground : s.anotherCustomBackground
        }`}
        onClick={toggleUserBackground}
        ref={userContainerRef}
      >
        {localValue ? <Store heigth={36} /> : <StoreClosed height={36} />}
      </div>
      {userActive ? (
        <Open_closed handlestate={toggleUserBackground}/>
      ) : null}
    </nav>
  );
}
