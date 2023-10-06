import s from './header.module.scss';
import { TbArrowBackUp } from "react-icons/tb";
import {Store,Menu,History,Sales,Config} from "../../atom/iconsHerocoins/icons";
import HugeTitle from '../../atom/HugeTitle/HugeTitle';
import LineText from '../../atom/LineText/LineText';

export default function Header({icon,title,detail}) {
  const handleBackClick = () => {
   window.history.back();
   console.log("dasd")
  };

  const optionIcon={
    "store":<Store heigth={"24"}/>,
    "menu":<Menu heigth={"24"}/>,
    "history":<History heigth={"24"}/>,
    "sales":<Sales heigth={"24"}/>,
    "config":<Config heigth={"24"} />,
  }
  const iconEnd=optionIcon[icon];
  console.log(iconEnd)
  return (
    <header>
      <div>
     <TbArrowBackUp className={s.TbArrowBackUp} onClick={handleBackClick} />
{/*       <h1>
        {optionIcon[icon]}
        {title}
      </h1> */}
      <HugeTitle text={title} icon={optionIcon[icon]} fontSize={"28px"} />
      </div>
      {/* <span>{detail}</span> */}
      <LineText text={detail} centered disabled />
    </header>
  );
}
