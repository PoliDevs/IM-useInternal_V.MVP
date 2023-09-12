import LineText from '../../atom/LineText/LineText';
import s from './MenuStep.module.scss';

export default function MenuStep({number, text, light}) {
  return (
    <div className={`${s.menuStep} ${light && s.light}`}>
      <span className={s.number}>{number}</span>
      <LineText text={text} secundary={true} />
    </div>
  )
}
