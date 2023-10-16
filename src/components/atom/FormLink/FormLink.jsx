import { Link } from "react-router-dom"
import s from "./FormLink.module.scss"

export default function FormLink({text, path}) {
  return (
    <Link to={path} className={s.link}>{text}</Link>
  )
}
