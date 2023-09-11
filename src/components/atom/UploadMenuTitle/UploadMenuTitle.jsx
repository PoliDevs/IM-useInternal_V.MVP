import s from './UploadMenuTitle.module.scss'

export default function UploadMenuTitle({text}) {
  return (
    <h2 className={s.title}>{text}</h2>
  )
}
