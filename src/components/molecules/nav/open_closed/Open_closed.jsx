import { useState, useEffect } from "react";
import s from "./open_closed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { localOpen, openLocal, closedLocal } from "../../../../redux/actions";
import Switch from "react-switch";
import { useTranslation } from "react-i18next";

export default function Open_closed({onBlur}) {
  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const localOpenValue = useSelector((state) => state.localOpenValue);
  const [localUiValue, setLocalUiValue] = useState(localOpenValue); // Estado local solo para la interfaz
  const [t,i18n]=useTranslation("global")

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
      <b>{t("nav.open or close local")}</b>
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
