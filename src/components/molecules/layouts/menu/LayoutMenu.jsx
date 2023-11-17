import React from "react";
import LargeButton from "../../../atom/LargeButton/LargeButton";
import MenuItem from "../../sections/menu/MenuItem/MenuItem";
import DeleteMenuCurrent from "../../sections/menu/replaceMenuCurrent/ReplaceMenuCurrent";
import DownloadMenuCurrent from "../../sections/menu/downloadMenu/DownloadMenuCurrent";
import LogoLocal from "../../sections/menu/logoLocal/LogoLocal";
import s from "./LayoutMenu.module.scss";
import { useState} from "react";
import { useTranslation } from "react-i18next";

export default function LayoutMenu() {
  const [t,i18n]=useTranslation("global");
  const manageCurrentMenu=t("menu.manage current menu");
  const deleteCurrentMenu=t("menu.replace current menu");
  const downloadMenuTemplate=t("menu.download menu template");
  const localLogo=t("menu.local logo");

  const [selectedOption, setSelectedOption] = useState(manageCurrentMenu);
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  
  const optionToComponent = {
    [t("menu.manage current menu")]: <MenuItem />,
    [t("menu.replace current menu")]: <DeleteMenuCurrent />,
    [t("menu.download menu template")]: <DownloadMenuCurrent />,
    // [t("menu.local logo")]: <LogoLocal />,
  };
  return (
    <div className={s.containerd}>
      <section className={s.buttonContent}>
        <LargeButton
          text={manageCurrentMenu}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(manageCurrentMenu)}
        />
        <LargeButton
          text={deleteCurrentMenu}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(deleteCurrentMenu)}
        />
        <LargeButton
          text={downloadMenuTemplate}
          icon={"arrowDownload"}
          onClick={() => handleOptionClick(downloadMenuTemplate)}
        />
        {/* <LargeButton
          text={localLogo}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(localLogo)}
        /> */}
      </section>
      <section className={s.menuContent}>
        {optionToComponent[selectedOption]}
      </section>
    </div>
  );
}
