import { Link } from "react-router-dom";
import s from './link.module.scss'

export default function Links({children,to,onclick}) {
    const primary="#212121"
    const secundary="#FFFFFF";
  return (
    <>
    <Link className={s.link} to={to} onclick={onclick}>{children}</Link>
    </>
  )
}
