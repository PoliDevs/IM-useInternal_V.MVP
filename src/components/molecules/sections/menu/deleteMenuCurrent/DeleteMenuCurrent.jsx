import React from "react";
import MenuStep from "../../../MenuStep/MenuStep";
import Modal from "../../../modals/menuDeleteModal/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DeleteMenuCurrent() {
  const [t,i18n]=useTranslation("global");
  const [modal, setModal] = useState(false);
  
  const handleModal = () => {
    setModal(!modal)
  };
  const handleDowload=()=>{
    // Aquí debes agregar lógica para descargar el archivo
    // Puedes usar la etiqueta <a> para ello
    const fileUrl = '../../../../../../public/ExcelFile/I-Menu.xlsx'; // Reemplaza con la ruta real de tu archivo
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
        text={t("menu.delete menu current.file")}
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
      title={t("menu.delete menu current.modal.do you want to delete the menu")}
      text={t("menu.delete menu current.modal.if you delete the menu you must upload another one")}
      text_2={t("menu.delete menu current.modal.in the meantime, your store will remain closed")}
      handleModal={handleModal}
      text_cancel={t("menu.delete menu current.modal.cancel")}
      text_confirm={t("menu.delete menu current.modal.confirm")}
      />
      :null}
      </>
  );
}
