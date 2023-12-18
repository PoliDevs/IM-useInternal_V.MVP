import s from './Title.module.scss';
import { LockClosed } from '../iconsHerocoins/icons';

export default function Title({icon,text,disabled, bold,children,color,marginLeft,padding,textAlign,fontWeight}) {
  const icons={
    LockClosed:<LockClosed height={"20px"}/>
  }
  return (
    <h2 className={`${s.title} ${disabled && s.disabled} ${bold && s.bold}`} style={{textAlign,padding,color,marginLeft,fontWeight}}>
     {icon&&icons[icon]} {text}{children}
    </h2>
  )
}
