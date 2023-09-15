import InstructionContainer from '../../atom/InstructionContainer/InstructionContainer';
import LineText from '../../atom/LineText/LineText';
import UploadMenuTitle from '../../atom/UploadMenuTitle/UploadMenuTitle';
import InstructionButton from '../InstructionButton/InstructionButton';
import MenuStep from '../MenuStep/MenuStep';
import s from './MenuInstructionsBase.module.scss';

export default function MenuInstructionsBase() {
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
          <MenuStep light={true} number={1} text={"Descarga nuestra plantilla para menú"} />
          <MenuStep light={true}
            number={2}
            text={"Sube tu menú unas vez que hayas guardado los productos"}
          />
          <MenuStep light={true} number={3} text={"Sube la imagen de tu logo"} />
          <MenuStep light={true} number={4} text={"¡Abre tu local para empezar a vender!"} />
        </div>
        <InstructionButton
          helpText={"Necesito ayuda"}
          text={"Continuar"}
          path={"/instructions/download"}
        />
      </main>
    </InstructionContainer>
  );
}
