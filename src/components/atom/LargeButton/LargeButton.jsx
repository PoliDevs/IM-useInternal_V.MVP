import { useState } from "react";
import { ReactComponent as ArrowLongRight } from "../../../assets/ArrowLongRight.svg";
import { ReactComponent as ArrowDownload } from "../../../assets/ArrowDownload.svg";
import Paragraph from '../Paragraph/Paragraph';
import s from './LargeButton.module.scss';

export default function LargeButton({text, icon, onClick, disabled,selected}) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    onClick()
  }
  
  const icons = {
    arrowRight: <ArrowLongRight className={s.icon} />,
    arrowDownload: <ArrowDownload className={s.icon} />
  }
  return (
    <button  className={`${s.button} ${selected && s.active} ${disabled && s.disabled}`}
     onClick={handleClick}>
      <Paragraph text={text} secundary={selected || disabled && true} />
      {icon && icons[icon]}
    </button>
  )
}
