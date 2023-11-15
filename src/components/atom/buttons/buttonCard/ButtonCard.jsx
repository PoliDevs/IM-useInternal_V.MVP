import s from './ButtonCard.module.scss';
import { BackSpace } from '../../iconsHerocoins/icons';

export default function ButtonCard({color,onClick,background,text,iconName}) {
  
  let icon={
    "backSpace":<BackSpace heigth={18}/>,
  }
    return (
    <button style={{background:background,color:color}} onClick={onClick} className={s.buttonCard} 
    onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.05)"; // Escala el botón al 110% en hover
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)"; // Devuelve el botón a su tamaño original al salir del hover
      }}
    >{text}{icon[iconName]}</button>
  )
}
