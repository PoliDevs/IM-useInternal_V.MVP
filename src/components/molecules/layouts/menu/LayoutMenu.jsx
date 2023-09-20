import React from "react";
import LargeButton from "../../../atom/LargeButton/LargeButton";
import LineText from "../../../atom/LineText/LineText";
import MenuItem from "../../MenuItem/MenuItem";
import MenuStep from "../../MenuStep/MenuStep";
import s from "./LayoutMenu.module.scss";
import { useState } from "react";
import { renderContentRight } from "../../../../utils/functions";
import { Button, Icon } from "semantic-ui-react";

export default function LayoutMenu() {
  const [selectedOption, setSelectedOption] = useState("Gestionar menu actual");
  const contentDescription = renderContentRight(selectedOption);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    /*     <section className={s.section}> */
    <div className={s.containerd}>
      <section className={s.buttonContent}>
        <LargeButton
          text={"Gestionar menu actual"}
          icon={"arrowRight"}
          onClick={() => handleOptionClick("Gestionar menu actual")}
        />
        <LargeButton
          text={"Eliminar menu actual"}
          icon={"arrowRight"}
          onClick={() => handleOptionClick("Eliminar menu actual")}
        />
        <LargeButton
          text={"Descargar plantilla de menu"}
          icon={"arrowDownload"}
          onClick={() => handleOptionClick("Descargar plantilla de menu")}
        />
        <LargeButton
          text={"Logo del local"}
          icon={"arrowRight"}
          onClick={() => handleOptionClick("Logo del local")}
        />
      </section>

      {/*         
menu item
<div className={s.menuContent}>
          <div className={s.title}>
            <div style={{ display: "inline-block", width: "15%" }}>
              <LineText text={"Emoji"} secundary={true}/>
            </div>
            <div style={{ display: "inline-block", width: "50%" }}>
              <LineText text={"Producto"} secundary={true}/>
            </div>
            <div style={{ display: "inline-block", width: "20%" }}>
              <LineText text={"Precio"} secundary={true}/>
            </div>
            <div style={{ display: "flex", width: "15%", justifyContent: "center", alignItems: "center" }}>
              <LineText text={"On/Off"} secundary={true}/>
            </div>
          </div>
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
          <MenuItem
            text={"Hamburguesa con papas"}
            cost={"$1200"}
            active={true}
          />
        </div> */}
      {/* Eliminar menu actual */}
      <section className={s.menuContent}>
        {contentDescription &&
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
        ) : null}
      </section>
      {/*logo del local*/}
      {/*         <div className={s.menuContent} >
          <MenuStep
          />
        </div> */}
    </div>
    /*     </section> */
  );
}
