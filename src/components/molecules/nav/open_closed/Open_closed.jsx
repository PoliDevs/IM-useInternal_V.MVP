import { useState, useEffect } from "react";
import s from "./open_closed.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { localOpen, openLocal, closedLocal } from "../../../../redux/actions";
import Switch from "react-switch";
import { useTranslation } from "react-i18next";

export default function Open_closed({ handlestate }) {
  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const localOpenValue = useSelector((state) => state.localOpenValue);
  const [localUiValue, setLocalUiValue] = useState(localOpenValue);
  const [t, i18n] = useTranslation("global");

  const dispatch = useDispatch();

  useEffect(() => {
    // Cuando el componente se monta, actualiza el estado localOpen en el Redux store
    dispatch(localOpen(comerceId));
  }, [comerceId, localUiValue, localOpenValue]);

  const handleLocalValue = () => {
    if (localUiValue) {
      dispatch(closedLocal(comerceId));
      setLocalUiValue(!localUiValue);
      setTimeout(() => {
        handlestate();
      }, [500]);
    } else {
      dispatch(openLocal(comerceId));
      setLocalUiValue(!localUiValue);
      setTimeout(() => {
        handlestate();
      }, [500]);
    }
  };

  const handleOnBlur = () => {
    if (localUiValue) {
      setLocalUiValue(false);
    }
  };

  return (
    <div
      className={s.containerd_switch}
      tabIndex={0}
      onBlur={handleOnBlur}
      onClick={handleLocalValue}
    >
      <div className={s.content} tabIndex={0} onBlur={handleOnBlur}>
        <b>{t("nav.open or close local")}</b>
        <Switch
          onChange={handleLocalValue}
          checked={localUiValue}
          className={localUiValue?s.switch:s.switchClosed}
          height={50}
          width={100}
        />
      </div>
    </div>
  );
}