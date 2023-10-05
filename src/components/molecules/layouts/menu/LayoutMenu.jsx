import React from "react";
import LargeButton from "../../../atom/LargeButton/LargeButton";
import LineText from "../../../atom/LineText/LineText";
import MenuItem from "../../MenuItem/MenuItem";
import DeleteMenuCurrent from "../../sections/menu/deleteMenuCurrent/DeleteMenuCurrent";
import DownloadMenuCurrent from "../../sections/menu/downloadMenu/DownloadMenuCurrent";
import LogoLocal from "../../sections/menu/logoLocal/LogoLocal";
import MenuStep from "../../MenuStep/MenuStep";
import s from "./LayoutMenu.module.scss";
import { useState } from "react";
import { renderContentRight } from "../../../../utils/functions";
import { Button, Icon } from "semantic-ui-react";

export default function LayoutMenu() {
  const [selectedOption, setSelectedOption] = useState("Gestionar menú actual");
  //const contentDescription = renderContentRight(selectedOption);
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
        {/*         {contentDescription &&
          React.createElement(
            contentDescription.component,
            contentDescription.props
          )}
        {selectedOption === "Logo del local" ? (
          <Button
            secondary
            size="big"
            style={{
              width: "80%",
              height: "60px",
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            Reemplazar imagen
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{ height: "20px", width: "20px", color: "#000" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </Button>
        ) : null} */}
        {optionToComponent[selectedOption]}
      </section>
    </div>
  );
}
