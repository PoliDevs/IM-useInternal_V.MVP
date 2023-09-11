import { ReactComponent as Eye } from "../../../assets/Eye.svg";
import { ReactComponent as EyeSlash } from "../../../assets/EyeSlash.svg";
import LineText from "../../atom/LineText/LineText";
import SelectIcon from "../../atom/SelectIcon/SelectIcon";
import s from "./MenuItem.module.scss";
export default function MenuItem({text, cost, active}) {
  return (
    <div className={s.menuItemContainer}>
      <div style={{ display: "inline-block", width: "15%" }}>
        <SelectIcon />
      </div>
      <div style={{ display: "inline-block", width: "50%" }}>
        <LineText text={text} />
      </div>
      <div style={{ display: "inline-block", width: "20%" }}>
        <LineText text={cost} />
      </div>
      <div
        style={{
          display: "flex",
          width: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {active ? (
          <Eye className={s.eyeIcon} />
        ) : (
          <EyeSlash className={s.eyeIcon} />
        )}
      </div>
    </div>
  );
}
