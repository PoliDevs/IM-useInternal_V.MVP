/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { ReactComponent as ArrowDownload } from "../../../assets/ArrowDownload.svg";
import { ReactComponent as ArrowUpload } from "../../../assets/ArrowUpload.svg";
import { useDropzone } from "react-dropzone";
import Title from "../../atom/Title/Title";
import s from "./File.module.scss";

export default function File({
  typeIcon,
  text,
  setFile,
  setSubmitting,
  step
}) {

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setSubmitting(true);
    // if (step !== "3")
    // {
    //   let xlfile = acceptedFiles[0];
    //   let reader = new FileReader();
    //   reader.readAsArrayBuffer(xlfile);
    //   reader.onload = (e) => {
    //   setFile(e.target.result);
    // }
    // }else {
    //   let imgfile = acceptedFiles[0];
    //   let reader = new FileReader();
    //   reader.readAsDataURL(imgfile);
    //   reader.onload = (e) => {
    //     setFile(e.target.result);
    //     console.log(e.target.result);
    //   };
    // }
    let xlfile = acceptedFiles[0];
    let reader = new FileReader();
    if (step !== 3){
      reader.readAsArrayBuffer(xlfile);
    }else {
      reader.readAsDataURL(xlfile);
    }
    reader.onload = (e) => {
    setFile(e.target.result);
  }
  }, []);
  
  const conditionalAccept =
    step !== 3
      ? {
          "application/vnd.ms-excel": [".xls"],
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
            ".xlsx",
          ],
          "application/xml": [".xml"],
        }
      : {
          "image/jpeg": [".jpeg", ".jpg"],
        };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: conditionalAccept,
    maxFiles: 1,
  });

  const filePath = "/ExcelFile/I-Menu.xlsx";

  return typeIcon === "download" ? (
    <a className={s.file} href={filePath} download={"I-Menu Template.xlsx"}>
      <ArrowDownload className={s.icon} />
      <Title text={text} />
    </a>
  ) : (
    <div {...getRootProps()} className={s.file}>
      <ArrowUpload className={s.icon} />
      <input {...getInputProps()} />
      {isDragActive ? (
        <Title text={"Arroja tu archivo aqui"} bold={true} />
      ) : (
        <Title text={text} bold={true} />
      )}
    </div>
  );
}
