import { useState } from "react";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import InstructionContainer from "../../atom/InstructionContainer/InstructionContainer";
import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import LineText from "../../atom/LineText/LineText";
import MenuStep from "../../molecules/MenuStep/MenuStep";
import File from "../../molecules/File/File";
import InstructionButton from "../../molecules/InstructionButton/InstructionButton";
import s from "./InstructionThree.module.scss";
import { useTranslation } from "react-i18next";

export default function InstructionThree() {
  const [t,i18n]=useTranslation("global");
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
          <UploadMenuTitle text={t("instructions.title")} />
          <LineText
            text={t("instructions.sub title")}
            centered={true}
            bold={true}
          />
          <MenuStep
            number={3}
            text={
              `${t("instructions.steps.text_3")} \n${t("instructions.steps.text_3_1")} \n ${t("instructions.steps.text_3_2")}\n ${t("instructions.steps.text_3_3")} \n ${t("instructions.steps.text_3_4")}`
            }
          />
          <>
            <File
              step={3}
              typeIcon={"upload"}
              text={t("instructions.steps.text_3_5")}
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
          helpText={t("instructions.button.i need help")}
          text={t("instructions.button.continue")}
          path={/* file && */ "/instructions/onDemand"}
          handleClick={handleClick}
        />
      </main>
    </InstructionContainer>
  );
}
