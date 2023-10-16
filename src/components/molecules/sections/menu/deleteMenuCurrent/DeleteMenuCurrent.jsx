import React from "react";
import MenuStep from "../../../MenuStep/MenuStep";
import Modal from "../../../modal/Modal";
import { useState } from "react";

export default function DeleteMenuCurrent() {
  const [modal, setModal] = useState(false);
  
  const handleModal = () => {
    setModal(!modal)
  };
/*   const handleCancel = () => {
    setModal(false);
  }; */
  return (
    <>
      <MenuStep
        text={"Menu.xlm"}
        icon_1={"ArrowDownload"}
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
