import s from "./HugeTitle.module.scss"

export default function HugeTitle({text}) {
  return (
    <h1 className={s.hugeTitle}>{text}</h1>
  )
}
