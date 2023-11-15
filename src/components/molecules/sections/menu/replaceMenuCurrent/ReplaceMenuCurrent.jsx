import React from "react";
import MenuStep from "../../../MenuStep/MenuStep";
import Modal from "../../../modals/menuDeleteModal/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DeleteMenuCurrent() {
  const [t,i18n]=useTranslation("global");
  const [modal, setModal] = useState(false);
  const lan=i18n.language;
  const handleModal = () => {
    setModal(!modal)
  };
  const handleDowload=()=>{
    // Aquí debes agregar lógica para descargar el archivo
    // Puedes usar la etiqueta <a> para ello
    const fileUrl = lan==="es"?"/ExcelFile/I-Menu_ES.xlsx":'/ExcelFile/I-Menu.xlsx'; // Reemplaza con la ruta real de tu archivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Imenu_Template'; // Puedes especificar un nombre para el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <MenuStep
        text={t("menu.replace menu current.file")}
        icon_1={"ArrowDownload"}
        onClick_icon_1={handleDowload}
        className={"menu_option"}
        icon_2={"XIcon"}
        onClick_icon_2={handleModal}
      />
      {modal?
      <Modal
      open={modal}
      //open={true}
      title={t("menu.replace menu current.modal.do you want to replace menu")}
      text={t("menu.replace menu current.modal.text_1")}
      text_2={t("menu.replace menu current.modal.text_2")}
      handleModal={handleModal}
      text_cancel={t("menu.replace menu current.modal.cancel")}
      text_confirm={t("menu.replace menu current.modal.confirm")}
      />
      :null}
      </>
  );
}
