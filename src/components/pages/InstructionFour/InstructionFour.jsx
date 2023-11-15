import InstructionContainer from '../../atom/InstructionContainer/InstructionContainer';
import LineText from '../../atom/LineText/LineText';
import Open_Close from '../../atom/Open_Close/Open_Close';
import UploadMenuTitle from '../../atom/UploadMenuTitle/UploadMenuTitle';
import InstructionButton from '../../molecules/InstructionButton/InstructionButton';
import MenuStep from '../../molecules/MenuStep/MenuStep';
import s from './InstructionFour.module.scss';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Container from "../../atom/container/Container";

export default function InstructionFour() {
  const [t,i18n]=useTranslation("global");

  const token=useSelector(state=>state.user_internal.token)
  console.log(token)

  return (
    <Container>
    <InstructionContainer>
      <main className={s.mainContainer}>
        <div className={s.textContainer}>
          <UploadMenuTitle text={t("instructions.title")} />
          <LineText
            text={t("instructions.sub title")}
            centered={true}
            bold={true}
          />
          <MenuStep number={4} text={t("instructions.steps.step_4")} />
          <Open_Close />
        </div>
        <InstructionButton
          helpText={t("instructions.button.i need help")}
          text={t("instructions.button.continue")}
          path={token?"/dashboard":"/"}
        />
      </main>
    </InstructionContainer>
    </Container>
  );
}
