import { useState } from "react";
import s from "./open_close.module.scss";

export default function Open_close() {
  const [openClose, setOpenClose] = useState(false);

  const handleOpenClose = () => {
    setOpenClose(!openClose);
  };
/*   console.log(openClose); */
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
