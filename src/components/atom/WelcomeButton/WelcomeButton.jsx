import { useNavigate } from "react-router-dom";
import s from "./WelcomeButton.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { getMenuActive } from "../../../redux/actions";

export default function WelcomeButton({text, path}) {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  /* const menuActive=useSelector(state=>state.menuActive) */
  const comerceId=useSelector(state=>state.user.comerceId)
/*   console.log(comerceId) */
/* console.log(menuActive) */
  const handleClick = () => {
    //aca preguntar si tiene un menu y guardarlo en redux
    dispatch(getMenuActive(comerceId))
    /*     console.log(menuActive) */
    navigate(path);
  }

  return (
    <button className={s.button} onClick={handleClick}>{text}</button>
  )
}
