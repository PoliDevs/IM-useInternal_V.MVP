import { ReactComponent as ArrowLongRight } from "../../../assets/ArrowLongRight.svg";
import { ReactComponent as ArrowDownload } from "../../../assets/ArrowDownload.svg";
import Paragraph from '../Paragraph/Paragraph';
import s from './LargeButton.module.scss';

export default function LargeButton({text, icon, active}) {
  const icons = {
    arrowRight: <ArrowLongRight className={s.icon} />,
    arrowDownload: <ArrowDownload className={s.icon} />
  }
  return (
    <button className={`${s.button} ${active && s.active}`}>
      <Paragraph text={text} secundary={active && true} />
      {icon && icons[icon]}
    </button>
  )
}
