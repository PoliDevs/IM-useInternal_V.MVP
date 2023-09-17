import s from './Title.module.scss';

export default function Title({text, bold}) {
  return (
    <h2 className={`${s.title} ${bold && s.bold}`}>
      {text}
    </h2>
  )
}
