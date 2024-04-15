import React from 'react';
import MenuStep from "../../../MenuStep/MenuStep";
import { useTranslation } from 'react-i18next';

export default function DownloadMenuCurrent() {
  const [t,i18n]=useTranslation("global");
  const lan=i18n.language;
  const handleDowload=()=>{
    // Aquí debes agregar lógica para descargar el archivo
    // Puedes usar la etiqueta <a> para ello
    const fileUrl = lan==="es" ? "../../../../../../public/ExcelFile/I-Menu_es.xlsx" : '/ExcelFile/I-Menu.xlsx' // Reemplaza con la ruta real de tu archivo
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Imenu_Template.xlsx'; // Puedes especificar un nombre para el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <MenuStep
      text={t("menu.download template.download template")}
      icon_1={"ArrowDownload"}
      className={"menu_option"}
      icon_2=""
      // onClick_icon_1={handleDowload}
      onClick={handleDowload}
    />
  );
}
