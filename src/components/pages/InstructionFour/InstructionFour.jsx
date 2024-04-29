import InstructionContainer from "../../atom/InstructionContainer/InstructionContainer";
import LineText from "../../atom/LineText/LineText";
import Open_Close from "../../atom/Open_Close/Open_Close";
import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import InstructionButton from "../../molecules/InstructionButton/InstructionButton";
import MenuStep from "../../molecules/MenuStep/MenuStep";
import s from "./InstructionFour.module.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Container from "../../atom/container/Container";
import { Toaster, toast } from "react-hot-toast";

export default function InstructionFour() {
  const [t, i18n] = useTranslation("global");
  const token = useSelector((state) => state.user_internal.token);

  const handleClickIsAllowed = () => {
    localStorage.setItem("isAllowedInstructions", true);
    // Retraso antes de mostrar el toast y redireccionar
   if(!token){
    toast.success('Listo, ahora inicia sesión',{duration: 3000});
    setTimeout(() => {
      
      // Redireccionar después de mostrar el toast
      window.location.href =  "/"
    }, 3500); // Retraso de 1 segundo
   }
   else{
    window.location.href = "/dashboard"
   }
  };

  return (
    <Container marginTop>
      <InstructionContainer>
        <main className={s.mainContainer}>
          <div className={s.textContainer}>
            <UploadMenuTitle text={t("instructions.title")} />
            <LineText
              text={t("instructions.sub title")}
              centered={true}
              bold={true}
            />
            <MenuStep number={3} text={t("instructions.steps.step_3")} />
            <Open_Close />
          </div>
          <InstructionButton
            helpText={t("instructions.button.i need help")}
            text={t("instructions.button.continue")}
            
            handleClick={handleClickIsAllowed}
          />
        </main>
      </InstructionContainer>
    </Container>
  );
}
