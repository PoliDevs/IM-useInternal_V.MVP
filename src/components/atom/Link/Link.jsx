import { Link } from "react-router-dom";
import s from "./link.module.scss";
import { Store,Menu,HistoryIcon,Sales,Config,QrCode } from "../iconsHerocoins/icons";

export default function Links({ text, to, onclick,icon,onBlur}) {
  const optionIcon={
    "store":<Store heigth={"25"}/>,
    "menu":<Menu heigth={"25"}/>,
    "history":<HistoryIcon heigth={"25"}/>,
    "sales":<Sales heigth={"25"}/>,
    "config":<Config heigth={"25"} />,
    "qr":<QrCode heigth={"25"} />,
  }
  return (
      <Link className={s.link} to={to} onClick={onclick} onBlur={onBlur} tabIndex={0} > {optionIcon[icon]}{text}</Link>
  );
}
