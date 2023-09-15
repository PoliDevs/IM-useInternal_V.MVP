import { ReactComponent as HelpIcon } from "../../../assets/Help.svg";
import { Link } from "react-router-dom";
import s from "./InstructionButton.module.scss";

export default function InstructionButton({ helpText, text, path }) {
  return (
    <div className={s.buttonContainer}>
      <div className={s.helpContainer}>
        <HelpIcon className={s.icon} />
        <Link style={{ textDecoration: "none", color: "#212121" }} to="">
          {helpText}
        </Link>
      </div>
      <Link to={path} className={s.button}>{text}</Link>
    </div>
  );
}
