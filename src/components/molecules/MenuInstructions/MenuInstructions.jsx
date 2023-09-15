import { useEffect, useState } from "react";
import { ReactComponent as ArrowDownload } from "../../../assets/ArrowDownload.svg";
import { ReactComponent as XIcon } from "../../../assets/XIcon.svg";
import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import LineText from "../../atom/LineText/LineText";
import MenuStep from "../MenuStep/MenuStep";
import File from "../File/File";
import InstructionButton from "../InstructionButton/InstructionButton";
import SubmitLoader from "../../atom/SubmitLoader/SubmitLoader";
import * as XLSX from "xlsx";
import s from "./MenuInstructions.module.scss";

export default function MenuInstructions({ type, step, stepText, fileText }) {
  const [file, setFile] = useState(null);
  const [menu, setMenu] = useState(null);
  const [submiting, setSubmiting] = useState(false);

  useEffect(() => {
    if (file !== null) {
      setSubmiting(false);
      const workbook = XLSX.read(file, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setMenu(data);
    } 
  }, [file])

  const clearMenu = () =>{
    setFile(null);
    setMenu(null);
  }

  return (
    <main className={s.mainContainer}>
      <div className={s.textContainer}>
        <UploadMenuTitle text={"Empecemos con tu menú"} />
        <LineText
          text={"Intenta cumplir con los pasos antes de empezar a operar"}
          centered={true}
          bold={true}
        />
        <MenuStep number={step} text={stepText} />
        {submiting ? (
          <SubmitLoader />
        ) : (
          <File
            typeIcon={type}
            text={fileText}
            file={file}
            setFile={setFile}
            menu={menu}
            setMenu={setMenu}
            submitting={submiting}
            setSubmitting={setSubmiting}
          />
        )}
        {(menu !==null) && <div className={s.uploadedFile}>
          <LineText text={"Menu.XML"} secundary={true}/>
          <div className={s.icons}>
            <ArrowDownload style={{height: "24px", width: "24px"}}/>
            <XIcon style={{height: "24px", width: "24px"}} onClick={clearMenu}/>
          </div>
        </div>}
      </div>
      <InstructionButton
        helpText={"Necesito ayuda"}
        text={"Continuar"}
        path={(type === "download") ? ("/instructions/upload") : ("/instructions/pfp")}
      />
    </main>
  );
}
