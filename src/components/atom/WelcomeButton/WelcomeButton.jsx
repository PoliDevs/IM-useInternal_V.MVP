import { useNavigate } from "react-router-dom";
import s from "./WelcomeButton.module.scss"

export default function WelcomeButton({text, path}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  }

  return (
    <button className={s.button} onClick={handleClick}>{text}</button>
  )
}
