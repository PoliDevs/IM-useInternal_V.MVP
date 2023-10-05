import React from "react";
import MenuStep from "../../../MenuStep/MenuStep";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

export default function DeleteMenuCurrent() {
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log("delete");
    navigate("/instructions");
  };
  return (
    <MenuStep
      text={"Menu.xlm"}
      icon_1={"ArrowDownload"}
      className={"menu_option"}
      icon_2={"XIcon"}
      onClick={handleDelete}
    />
=======
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
>>>>>>> 240fce270bb5a53bc11e3139aade0fb2e09121cb
  );
}
