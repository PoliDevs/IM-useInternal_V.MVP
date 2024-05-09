import { useState, useEffect } from "react";
import { ReactComponent as XIcon } from "../../../assets/xIcon.svg";
import InstructionContainer from "../../atom/InstructionContainer/InstructionContainer";
import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import LineText from "../../atom/LineText/LineText";
import MenuStep from "../../molecules/MenuStep/MenuStep";
import File from "../../molecules/File/File";
import InstructionButton from "../../molecules/InstructionButton/InstructionButton";
import s from "./InstructionThree.module.scss";
import { useTranslation } from "react-i18next";
import Container from "../../atom/container/Container";
import axios from "axios";
//import { postImg } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { uploadFile } from "../../../firebase/firebase.config";

export default function InstructionThree() {
  const [t,i18n]=useTranslation("global");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [submiting, setSubmiting] = useState(false);
  const [redirectToNextPage, setRedirectToNextPage] = useState(false);
  const [commerceId, setCommerceId] = useState(null);

  const token = localStorage.getItem("token");


  const clearImage = () => {
    setFile(null);
    setImage(null);
  };

/*   const  handleClick= async(img)=> {
    console.log(img)
    try {
      let response = await axios.post(
        "https://tenkiweb.com/imenu/img/",
        img,
        {
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:5173/",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  } */

  //firebase
 // Función para obtener commerceId desde localStorage
 const getCommerceIdFromLocalStorage = () => {
  const menuResponse = JSON.parse(localStorage.getItem("menuResponse"));
  if (menuResponse && menuResponse.data && menuResponse.data.objCommerce) {
    const commerceId = menuResponse.data.CommerceId;
    return commerceId;
  } else {
    console.log("No se encontró el objeto o la propiedad CommerceId en menuResponse.");
    return null;
  }
};

useEffect(() => {
  // Cuando el componente se monta, obtenemos commerceId del localStorage
  const id = getCommerceIdFromLocalStorage();
  setCommerceId(id);
}, []); // Se ejecuta solo una vez al montar el componente

const handleClick = async () => {
  try {
    if (!commerceId) {
      console.log("CommerceId no está definido.");
      return;
    }
    const result = await uploadFile(file, commerceId.toString());
    setRedirectToNextPage(true);
    console.log(redirectToNextPage);
    console.log(result);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

return (
  <Container marginTop>
    <InstructionContainer>
      <main className={s.mainContainer}>
        <div className={s.textContainer}>
          <UploadMenuTitle text={t("instructions.title")} />
          <LineText text={t("instructions.sub title")} centered bold />
          <MenuStep
            number={3}
            text={`${t("instructions.steps.text_3")} \n${t("instructions.steps.text_3_1")} \n ${t("instructions.steps.text_3_2")}\n ${t("instructions.steps.text_3_3")} \n ${t("instructions.steps.text_3_4")}`}
          />
          <>
            <File
              step={3}
              typeIcon="upload"
              text={t("instructions.steps.text_3_5")}
              file={file}
              setFile={setFile}
              submitting={false}
              setSubmitting={() => {}} // Placeholder para setSubmitting
            />
            {file !== null && (
              <div className={s.uploadedFile}>
                <img src={URL.createObjectURL(file)} alt="" height="90px" />
                <div className={s.icons}>
                  <XIcon style={{ height: "24px", width: "24px" }} onClick={clearImage} />
                </div>
              </div>
            )}
          </>
        </div>
        <InstructionButton
          helpText={t("instructions.button.i need help")}
          text={t("instructions.button.continue")}
          path={token ? "/dashboard" : "/"}
          handleClick={handleClick}
        />
      </main>
    </InstructionContainer>
  </Container>
);
}