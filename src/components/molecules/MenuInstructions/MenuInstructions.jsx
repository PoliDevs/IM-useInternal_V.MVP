import UploadMenuTitle from "../../atom/UploadMenuTitle/UploadMenuTitle";
import LineText from "../../atom/LineText/LineText";
import MenuStep from "../MenuStep/MenuStep";
import File from "../File/File";
import InstructionButton from "../InstructionButton/InstructionButton";
import s from './MenuInstructions.module.scss';

export default function MenuInstructions({type, step, stepText, fileText}) {
  return (
    <main className={s.mainContainer}>
      <div className={s.textContainer}>
      <UploadMenuTitle text={"Empecemos con tu menú"}/>
      <LineText text={"Intenta cumplir con los pasos antes de empezar a operar"} centered={true} bold={true}/>
      <MenuStep number={step} text={stepText}/>
      <File typeIcon={type} text={fileText}/>
      </div>
      <InstructionButton helpText={"Necesito ayuda"} text={"Continuar"}/>
    </main>
  )
}
