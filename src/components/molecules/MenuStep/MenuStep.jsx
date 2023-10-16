/* eslint-disable react/prop-types */
import LineText from "../../atom/LineText/LineText";
import s from "./MenuStep.module.scss";
import { ReactComponent as ArrowDownload } from "../../../assets/ArrowDownload.svg";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";

export default function MenuStep({
  number,
  text,
  light,
  className,
  icon_1,
  icon_2,
  onClick,
  onClick_icon_1,
  onClick_icon_2
}) {
  // Objeto que mapea los nombres de iconos a componentes de iconos
  const iconComponents = {
    ArrowDownload: <ArrowDownload className={s.icon} onClick={onClick_icon_1} />,
    XIcon: <XIcon className={s.icon} onClick={onClick_icon_2} />,
    // Agrega más nombres de iconos y componentes correspondientes según sea necesario
  };

  return className ? (
    <div className={`${s.menu_option}`} onClick={onClick} >
      <LineText text={text} secundary={true} />
      <div>
        {icon_1 && iconComponents[icon_1]} {/* Renderiza el primer icono */}
        {icon_2 && iconComponents[icon_2]} {/* Renderiza el segundo icono */}
      </div>
    </div>
  ) : (
    <div className={`${s.menuStep} ${light && s.light}`}>
      <span className={s.number}>{number}</span>
      <LineText text={text} secundary={!light && true} />
    </div>
  );
}

