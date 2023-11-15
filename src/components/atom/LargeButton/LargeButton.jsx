import { useState } from "react";
import { ReactComponent as ArrowLongRight } from "../../../assets/ArrowLongRight.svg";
import { ReactComponent as ArrowDownload } from "../../../assets/ArrowDownload.svg";
import Paragraph from '../Paragraph/Paragraph';
import s from './LargeButton.module.scss';

export default function LargeButton({text, icon, onClick, disabled}) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    onClick()
  }

  const handleBlur = () => {
    setActive(false);
  }
  
  const icons = {
    arrowRight: <ArrowLongRight className={s.icon} />,
    arrowDownload: <ArrowDownload className={s.icon} />
  }
  return (
    <button className={`${s.button} ${active && s.active} ${disabled && s.disabled}`}
     onClick={handleClick}
      onBlur={handleBlur}>
      <Paragraph text={text} secundary={active || disabled && true} />
      {icon && icons[icon]}
    </button>
  )
}
