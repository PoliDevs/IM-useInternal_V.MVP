import { useState } from "react";
import { ReactComponent as XIcon } from "../../../assets/XIcon.svg";
import InstructionContainer from "../../atom/InstructionContainer/InstructionContainer";
import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import LineText from "../../atom/LineText/LineText";
import MenuStep from "../../molecules/MenuStep/MenuStep";
import File from "../../molecules/File/File";
import InstructionButton from "../../molecules/InstructionButton/InstructionButton";
import s from "./InstructionThree.module.scss";

export default function InstructionThree() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [submiting, setSubmiting] = useState(false);

  const clearImage = () => {
    setFile(null);
    setImage(null);
  };

  const handleClick = () => {
    //action to upload image
    clearImage()
  }

  return (
    <InstructionContainer>
      <main className={s.mainContainer}>
        <div className={s.textContainer}>
          <UploadMenuTitle text={"Empecemos con tu menú"} />
          <LineText
            text={"Intenta cumplir con los pasos antes de empezar a operar"}
            centered={true}
            bold={true}
          />
          <MenuStep
            number={3}
            text={
              "Sube la imagen del logo de tu local \ncondiciones: \n -Tu imagen debe ser cuadrada 1:1 \n -Formato JPG \n -Peso maximo: 100KB"
            }
          />
          <>
            <File
              step={3}
              typeIcon={"upload"}
              text={"Subir imagen"}
              file={file}
              setFile={setFile}
              menu={image}
              setMenu={setImage}
              submitting={submiting}
              setSubmitting={setSubmiting}
            />
            {image !== null && (
              <div className={s.uploadedFile}>
                <LineText text={"Logo.JPG"} secundary={true} />
                <div className={s.icons}>
                  <XIcon
                    style={{ height: "24px", width: "24px" }}
                    onClick={clearImage}
                  />
                </div>
              </div>
            )}
          </>
        </div>
        <InstructionButton
          helpText={"Necesito ayuda"}
          text={"Continuar"}
          path={image && "/instructions/onDemand"}
          handleClick={handleClick}
        />
      </main>
    </InstructionContainer>
  );
}
