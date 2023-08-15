import { useState } from "react";
import s from "./open_closed.module.scss";
import { useDispatch } from "react-redux";
import { localAction } from "../../../../redux/actions";

export default function Open_closed() {
  const [openClose, setOpenClose] = useState(false);
  const dispatch=useDispatch();

  const handleOpenClose = () => {
    setOpenClose(!openClose); 
    return dispatch(localAction(!openClose))
  };
  console.log(openClose);
  return (
    <div className={s.containerd_switch}>
      <b>Abre o cierra local</b>
      <label className={s.switch}>
        <input type="checkbox" onClick={handleOpenClose} />
        <span className={s.slider}></span>
      </label>
    </div>
  );
}
