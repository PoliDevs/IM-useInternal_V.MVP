import LargeButton from "../../../atom/LargeButton/LargeButton";
import s from "./LayoutMenu.module.scss";

export default function LayoutMenu() {
  return (
    <section className={s.section}>
      <div className={s.contentContainer}>
        <div className={s.buttonContent}>
          <LargeButton text={"Gestionar menu actual"} icon={"arrowRight"} active={true}/>
          <LargeButton text={"Eliminar menu actual"} icon={"arrowRight"} />
          <LargeButton
            text={"Descargar plantilla de menu"}
            icon={"arrowDownload"}
          />
          <LargeButton text={"Logo del local"} icon={"arrowRight"} />
        </div>
        <div className={s.menuContent}></div>
      </div>
    </section>
  );
}
