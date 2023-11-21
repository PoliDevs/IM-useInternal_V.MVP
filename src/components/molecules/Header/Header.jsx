import s from './header.module.scss';
/* import { TbArrowBackUp } from "react-icons/tb"; */
import {Store,Menu,History,Sales,Config,ArrowUturnLeft, StoreClosed,QrCode} from "../../atom/iconsHerocoins/icons";
import HugeTitle from '../../atom/HugeTitle/HugeTitle';
import LineText from '../../atom/LineText/LineText';
import { useNavigate,useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header({icon,title,detail,detail_2,color,off,height}) {
  const navigate=useNavigate();
  const {pathname}=useLocation();
  const [t,i18n]=useTranslation("global");

  const handleBackClick = () => {
   navigate("/dashboard")
  };

  const optionIcon={
    "store":<Store heigth={"24"}/>,
    "menu":<Menu heigth={"24"}/>,
    "history":<History heigth={"24"}/>,
    "sales":<Sales heigth={"24"}/>,
    "config":<Config heigth={"24"} />,
    "qr":<QrCode heigth={"24"} />,
    "storeClosed":<StoreClosed height={"24"} />
  }

  return (
    <header className={off ? s.closed : null} style={{height:height}} >
      <div className={s.content_1}>
      {pathname !=="/dashboard" ? <ArrowUturnLeft heigth={"24"} onClick={handleBackClick} className={s.TbArrowBackUp}/>:null}
     {/* <TbArrowBackUp className={s.TbArrowBackUp} onClick={handleBackClick} /> */}
      <HugeTitle text={title} icon={optionIcon[icon]} fontSize={"28px"} />
      </div>
      <div className={s.content_2}>
      <LineText text={detail} centered disabled={!off} secundary={off} />
      <LineText text={detail_2} centered disabled={!off} secundary={off} />
      </div>
    </header>
  );
}
