import React from "react";
import s from "./changePlanModal.module.scss";
import { useNavigate } from "react-router-dom";

export default function Modal({ open, title, text, text_2, text_3, text_4, plan, handleModal, text_confirm, text_cancel, confirmAction }) {
  const navigate = useNavigate();

  const exitAcount = () => {
    confirmAction();
    navigate(`/`);
  };

  return (
    <>
      {open ? (
        <>
          <div className={s.overlay} onClick={handleModal}></div>
          <div className={s.container}>
            <h2 className={s.title}>{title}</h2>
            <div className={s.content_texts}>
              <p className={s.textUno}>{text}</p>
              <p className={s.text}>{text_2}</p>
              {plan === "m2" && (
                <>
                  <p className={s.text}>{text_3}</p>
                  <p className={s.text}>{text_4}</p>
                </>
              )}
            </div>
            <div className={s.content_buttons}>
              <button className={s.cancelButton} onClick={handleModal}>
                {text_cancel}
              </button>
              <button className={s.confirmButton} onClick={exitAcount}>{text_confirm}</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
