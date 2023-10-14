import { useState, useEffect } from "react";
import s from "./open_closed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { localOpen, openLocal, closedLocal } from "../../../../redux/actions";
import Switch from "react-switch";

export default function Open_closed() {
  const comerceId = useSelector((state) => state.user.comerceId);
  const localOpenValue = useSelector((state) => state.localOpenValue);
  const [localUiValue, setLocalUiValue] = useState(localOpenValue); // Estado local solo para la interfaz
  console.log(localUiValue, "local");
  //console.log(localOpenValue);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cuando el componente se monta, actualiza el estado localOpen en el Redux store
    dispatch(localOpen(comerceId));
  }, [comerceId, localUiValue, localOpenValue]);

  const handleLocalValue = () => {
    if (localUiValue) {
      dispatch(closedLocal(comerceId));
      setLocalUiValue(!localUiValue);
      console.log(localUiValue, "stado local");
    } else {
      dispatch(openLocal(comerceId));
      setLocalUiValue(!localUiValue);
      console.log(localUiValue, "stado local");
    }
  };

  return (
    <div className={s.containerd_switch}>
      <div className={s.content}>
      <b>Abre o cierra local</b>
      <Switch
        onChange={handleLocalValue}
        checked={localUiValue}
        className={s.switch}
        height={43} // Ajusta la altura del interruptor según tus necesidades
        width={120} // Ajusta el ancho del interruptor según tus necesidades
        />
        </div>
    </div>
  );
}
