import React from "react";
import MenuStep from "../../../MenuStep/MenuStep";
import Modal from "../../../modals/menuDeleteModal/Modal";
import { useState } from "react";

export default function DeleteMenuCurrent() {
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
        text={"Menu.xlm"}
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
      title={"¿Deseas eliminar el menú?"}
      text={"Si eliminas el menú debes subir otro."}
      text_2={"Mientras tanto tu local permanecerá cerrado"}
      handleModal={handleModal}
      />
      :null}
      </>
  );
}
