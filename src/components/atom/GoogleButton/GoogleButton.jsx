import { FcGoogle } from "react-icons/fc";
import s from "./GoogleButton.module.scss";
import { useAuth } from "../../../context/authContext";

export default function GoogleButton({ text }) {
  const auth = useAuth();
  const {email}=auth.user;
  console.log(email)
/*   console.log(auth.user) */
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  return (
    <button className={s.googleButton} onClick={(e) => handleGoogle(e)}>
      <FcGoogle className={s.fcGoogle} />
      {text}
    </button>
  );
};