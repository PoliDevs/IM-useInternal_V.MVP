import HugeTitle from "../../atom/HugeTitle/HugeTitle";
import WelcomeButton from "../../atom/WelcomeButton/WelcomeButton";
import s from "./Welcome.module.scss";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getMenuActive } from "../../../redux/actions";
import logo from "../../../assets/logo_imenu_blanco.png"

export default function Welcome() {
  const user_internal = useSelector((state) => state.user_internal);
  const dispatch=useDispatch();


  useEffect(()=>{
    dispatch(getMenuActive(user_internal.comerceId))
  },[])
  return (
    <div className={s.mainContainer}>
      <div className={s.welcomeContainer}>
        <div className={`${s.frame} ${s.left}`}></div>
        <div className={s.textContainer}>
          <div className={s.logo}>
            <img src={logo} alt="IMENU" />
          </div>
          <HugeTitle text={"¡Bienvenido!"} />
          <p className={s.paragraph}>Ahora puedes comenzar a recibir pedidos</p>
        </div>
        <div className={`${s.frame} ${s.right}`}></div>
      </div>
      <WelcomeButton text={"Comenzar"} path={"/dashboard"} />
    </div>
  );
}
