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
}) {

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setSubmitting(true);
    let xlfile = acceptedFiles[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(xlfile);
    reader.onload = (e) => {
      setFile(e.target.result);
    };
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
        <Title text={"Subir menu"} bold={true} />
      )}
    </div>
  );
}
