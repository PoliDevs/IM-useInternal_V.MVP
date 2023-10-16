import InstructionContainer from '../../atom/InstructionContainer/InstructionContainer';
import LineText from '../../atom/LineText/LineText';
import Open_Close from '../../atom/Open_Close/Open_Close';
import UploadMenuTitle from '../../atom/UploadMenuTitle/UploadMenuTitle';
import InstructionButton from '../../molecules/InstructionButton/InstructionButton';
import MenuStep from '../../molecules/MenuStep/MenuStep';
import s from './InstructionFour.module.scss';

export default function InstructionFour() {
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
          <MenuStep number={4} text={"¡Abre tu local para empezar a vender!"} />
          <Open_Close />
        </div>
        <InstructionButton
          helpText={"Necesito ayuda"}
          text={"Continuar"}
          path={"/"}
        />
      </main>
    </InstructionContainer>
  );
}
