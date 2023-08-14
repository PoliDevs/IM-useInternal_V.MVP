import s from "./FormLabel.module.scss"

export default function FormLabel({htmlFor, text}) {
  return (
    <label htmlFor={htmlFor} className={s.label}>{text}</label>
  )
}
