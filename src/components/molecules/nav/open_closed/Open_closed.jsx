import { useState, useEffect } from "react";
import s from "./open_closed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { localOpen, openLocal, closedLocal } from "../../../../redux/actions";

export default function Open_closed() {
  const [t, i18n] = useTranslation("global");
  const comerceId = useSelector((state) => state.user.comerceId);
  const localOpenValue = useSelector((state) => state.localOpenValue);
  const [localUiValue, setLocalUiValue] = useState(localOpenValue); // Estado local solo para la interfaz
console.log(localOpenValue)
  //console.log(localOpenValue);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cuando el componente se monta, actualiza el estado localOpen en el Redux store
    dispatch(localOpen(comerceId));
  }, [comerceId]);

  const handleOpen = () => {
    console.log("abierto");
    dispatch(openLocal(comerceId))
    setLocalUiValue(localOpenValue); // Actualiza el estado local de la interfaz
  };
  const handleClose = () => {
    console.log("cerrado");
    dispatch(closedLocal(comerceId))
    setLocalUiValue(localOpenValue); // Actualiza el estado local de la interfaz
  };

  return (
    <div className={s.containerd_switch}>
      <b>{t("internal.nav.Open or close local")}</b>
      { localUiValue? (
        <label>
          <input
            type="checkbox"
            className={s.toggle_checkbox_open}
            onClick={handleClose}
          />
          <div className={s.toggle_switch_open}>
           {/*  <p className={s.local_value_open}>{localOpenValue?"Abierto":null}</p> */}
          </div>
        </label>
      ) : (
        <label>
          <input
            type="checkbox"
            className={s.toggle_checkbox}
            onClick={handleOpen}
          />
          <div className={s.toggle_switch}>
           {/*  <p className={s.local_value_closed}>Cerrado</p> */}
          </div>
        </label>
      )}
    </div>
  );
}