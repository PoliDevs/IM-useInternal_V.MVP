import s from './ButtonCard.module.scss';
import { ChevronLeft } from '../../iconsHerocoins/icons';

export default function ButtonCard({color,onClick,background,text,iconName,offButtons}) {
  
  let icon={
    "chevronLeft":<ChevronLeft heigth={18}/>,
  }
    return (
    <button style={{background:background,color:color}} onClick={onClick} className={`${s.buttonCard} ${offButtons&&s.buttonCard_off} `} 
    onMouseEnter={(e) => {
      if(!offButtons)e.target.style.transform = "scale(1.05)"; // Escala el botón al 110% en hover
      }}
      onMouseLeave={(e) => {
        if(!offButtons)e.target.style.transform = "scale(1)"; // Devuelve el botón a su tamaño original al salir del hover
      }}
    >{text}{icon[iconName]}</button>
  )
}
