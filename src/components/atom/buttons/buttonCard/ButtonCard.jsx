import s from './ButtonCard.module.scss';
import { ChevronNew } from '../../iconsHerocoins/icons';

export default function ButtonCard({ color, onClick, background, text, iconName, offButtons, colorGreen, iconSize }) {
  const icons = {
    "ChevronNew": <ChevronNew height={20} />, // Usamos el prop iconSize o un valor por defecto de 29
  };

  return (
    <button 
      style={{ background: background, color: color }} 
      onClick={onClick} 
      className={`${s.buttonCard} ${offButtons && s.buttonCard_off} ${colorGreen && s.colorGreen} ${iconSize && s.iconSize}`} 
      onMouseEnter={(e) => {
        if (!offButtons) e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        if (!offButtons) e.target.style.transform = "scale(1)";
      }}
    >
      {text}
      {icons[iconName]}
    </button>
  );
}
