import React from "react";
import MenuStep from "../../../MenuStep/MenuStep";
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
  );
}
