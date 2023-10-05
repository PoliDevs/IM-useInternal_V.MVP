import React from "react";
import LargeButton from "../../../atom/LargeButton/LargeButton";
import MenuItem from "../../MenuItem/MenuItem";
import DeleteMenuCurrent from "../../sections/menu/deleteMenuCurrent/DeleteMenuCurrent";
import DownloadMenuCurrent from "../../sections/menu/downloadMenu/DownloadMenuCurrent";
import LogoLocal from "../../sections/menu/logoLocal/LogoLocal";
import s from "./LayoutMenu.module.scss";
import { useState} from "react";

export default function LayoutMenu() {
  const [selectedOption, setSelectedOption] = useState("Gestionar menú actual");
<<<<<<< HEAD
  //const contentDescription = renderContentRight(selectedOption);
=======
  
>>>>>>> 240fce270bb5a53bc11e3139aade0fb2e09121cb
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  const optionToComponent = {
    "Gestionar menú actual": <MenuItem />,
    "Eliminar menú actual": <DeleteMenuCurrent />,
    "Descargar plantilla de menú": <DownloadMenuCurrent />,
    "Logo del local": <LogoLocal />,
  };
  return (
    <div className={s.containerd}>
      <section className={s.buttonContent}>
        <LargeButton
          text={"Gestionar menú actual"}
          icon={"arrowRight"}
          onClick={() => handleOptionClick("Gestionar menú actual")}
        />
        <LargeButton
          text={"Eliminar menú actual"}
          icon={"arrowRight"}
          onClick={() => handleOptionClick("Eliminar menú actual")}
        />
        <LargeButton
          text={"Descargar plantilla de menú"}
          icon={"arrowDownload"}
          onClick={() => handleOptionClick("Descargar plantilla de menú")}
        />
        <LargeButton
          text={"Logo del local"}
          icon={"arrowRight"}
          onClick={() => handleOptionClick("Logo del local")}
        />
      </section>
      <section className={s.menuContent}>
        {optionToComponent[selectedOption]}
      </section>
    </div>
  );
}
