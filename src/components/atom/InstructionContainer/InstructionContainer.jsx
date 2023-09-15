import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../../assets/ArrowBack.svg";
import s from './InstructionContainer.module.scss';

export default function InstructionContainer({children}) {
  const navigate = useNavigate();

  return (
    <main className={s.instructionContainer}>
      <ArrowBack className={s.arrowBack} onClick={()=>navigate(-1)}/>
      {children}
    </main>
  )
}
