import React from 'react';
import MenuStep from "../../../MenuStep/MenuStep";

export default function DownloadMenuCurrent() {
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
    <MenuStep
    text= {"Descargar plantilla"}
    icon_1={"ArrowDownload"}
    className= {"menu_option"}
    icon_2= ""
    onClick_icon_1={handleDowload}
    />
  )
}
