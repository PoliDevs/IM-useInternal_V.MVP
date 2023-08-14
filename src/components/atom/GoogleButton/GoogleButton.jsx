import { FcGoogle } from "react-icons/fc";
import s from "./GoogleButton.module.scss"

export default function GoogleButton({text}) {
  return (
    <button className={s.googleButton}>
      <FcGoogle className={s.fcGoogle} />
      {text}
    </button>
  );
}
