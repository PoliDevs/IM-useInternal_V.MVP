import s from "./FormParagraph.module.scss";

export default function FormParagraph({text}) {
  return (
    <p className={s.or}>{text}</p>
  )
}
