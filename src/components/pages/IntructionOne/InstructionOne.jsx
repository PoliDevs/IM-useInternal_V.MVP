import LineText from "../../atom/LineText/LineText";
import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import File from "../../molecules/File/File";
import MenuStep from "../../molecules/MenuStep/MenuStep";
import s from "./InstructionOne.module.scss";
import InstructionButton from "../../molecules/InstructionButton/InstructionButton";
import InstructionContainer from "../../atom/InstructionContainer/InstructionContainer";

export default function InstructionOne() {

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
          <MenuStep number={1} text={"Descarga nuestra plantilla para menú"} />
          <File
            step={1}
            typeIcon={"download"}
            text={"Descargar la plantilla"}
          />
        </div>
        <InstructionButton
          helpText={"Necesito ayuda"}
          text={"Continuar"}
          path={"/instructions/uploadMenu"}
        />
      </main>
    </InstructionContainer>
  );
}
