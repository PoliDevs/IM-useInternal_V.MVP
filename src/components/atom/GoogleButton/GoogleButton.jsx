import { FcGoogle } from "react-icons/fc";
import s from "./GoogleButton.module.scss";

export default function GoogleButton({ text, signInWithGoogle }) {
  return (
    <button
      className={s.googleButton}
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <FcGoogle className={s.fcGoogle} />
      {text}
    </button>
  );
}
