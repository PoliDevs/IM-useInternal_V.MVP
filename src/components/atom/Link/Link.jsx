import { Link } from "react-router-dom";
import s from "./link.module.scss";
import { Store,Menu,History,Sales,Config,QrCode } from "../iconsHerocoins/icons";

export default function Links({ text, to, onclick,icon }) {
  const optionIcon={
    "store":<Store heigth={"25"}/>,
    "menu":<Menu heigth={"25"}/>,
    "history":<History heigth={"25"}/>,
    "sales":<Sales heigth={"25"}/>,
    "config":<Config heigth={"25"} />,
    "qr":<QrCode heigth={"25"} />,
  }
  return (
      <Link className={s.link} to={to} onClick={() => onclick()}> {optionIcon[icon]}{text}</Link>
  );
}
