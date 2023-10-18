import { useNavigate } from "react-router-dom";
import s from "./WelcomeButton.module.scss";
import { useSelector } from "react-redux";

export default function WelcomeButton({ text, path }) {
  const navigate = useNavigate();

  const menuActive = useSelector((state) => state.menuActive);

  const handleClick = () => {
    //aca preguntar si tiene un menu y guardarlo en redux
    menuActive.length !== 0 ? navigate(path) : navigate("/instructions");
  };

  return (
    <button className={s.button} onClick={handleClick}>
      {text}
    </button>
  );
}
