import s from "./FormButton.module.scss"
export default function FormButton({text, type, disabled}) {
  return (
    <button className={s.button} type={type} disabled={disabled}>{text}</button>
  )
}
