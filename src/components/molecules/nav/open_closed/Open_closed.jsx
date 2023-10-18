import { useState, useEffect } from "react";
import s from "./open_closed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { localOpen, openLocal, closedLocal } from "../../../../redux/actions";
import Switch from "react-switch";

export default function Open_closed({onBlur}) {
  const comerceId = useSelector((state) => state.user_internal.comerceId);
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
      setTimeout(()=>{
        onBlur()
      },[500])
    } else {
      dispatch(openLocal(comerceId));
      setLocalUiValue(!localUiValue);
      setTimeout(()=>{
        onBlur()
      },[500])
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
        height={43}
        width={120}
        />
        </div>
    </div>
  );
}
