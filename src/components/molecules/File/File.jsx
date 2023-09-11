import { useState, useCallback } from "react";
import { ReactComponent as ArrowDownload } from "../../../assets/ArrowDownload.svg"
import { ReactComponent as ArrowUpload } from "../../../assets/ArrowUpload.svg";
import { useDropzone } from "react-dropzone";
import Title from "../../atom/Title/Title";
import * as XLSX from 'xlsx';
import s from './File.module.scss';

export default function File({typeIcon, text}) {
  const [file, setFile] = useState(null);
  const [menu, setMenu] = useState(null);
  const [errorType, setErrorType] = useState(false);

   const onDrop = useCallback((acceptedFiles) => {
     // Do something with the files
     let file = acceptedFiles[0];
     let reader = new FileReader();
     reader.readAsArrayBuffer(file);
     reader.onload = (e)=>{
      setFile(e.target.result)
     }
     setFile(acceptedFiles[0]);
   }, []);
   const { getRootProps, getInputProps, isDragActive } = useDropzone({
     onDrop,
     accept: {
       "application/vnd.ms-excel": [".xls"],
       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
         ".xlsx",
       ],
       "application/xml": [".xml"],
     },
     maxFiles: 1,
   });

  const handleSubmit = ()=> {
    if (file !== null) {
      const workbook = XLSX.read(file, {type: "buffer"});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setMenu(data);
    }
    console.log((menu));
  }

  const filePath = "ExcelFile/I-Menu.xlsx";

  return typeIcon === "download" ? (
    <a className={s.file} href={filePath} download={"I-Menu Template.xlsx"}>
      <ArrowDownload className={s.icon} />
      <Title text={text} />
    </a>
  ) : (
    // <div className={s.file}>
    <div {...getRootProps()} className={s.file}>
      <ArrowUpload className={s.icon} onClick={handleSubmit} />
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Subir menu</p>}
    </div>
  );
}
