import LargeButton from "../../../atom/LargeButton/LargeButton";
import LineText from "../../../atom/LineText/LineText";
import MenuItem from "../../MenuItem/MenuItem";
import s from "./LayoutMenu.module.scss";

export default function LayoutMenu() {
  return (
    <section className={s.section}>
      <div className={s.contentContainer}>
        <div className={s.buttonContent}>
          <LargeButton text={"Gestionar menu actual"} icon={"arrowRight"} />
          <LargeButton text={"Eliminar menu actual"} icon={"arrowRight"} />
          <LargeButton
            text={"Descargar plantilla de menu"}
            icon={"arrowDownload"}
          />
          <LargeButton text={"Logo del local"} icon={"arrowRight"} />
        </div>
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
        </div>
      </div>
    </section>
  );
}
