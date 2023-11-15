
import s from './contentRow.module.scss';

export default function ContentRow({children,justifyContent}) {
//space-around;space-between;space-evenly;center;
  return (
    <div className={s.contentRow} style={{justifyContent}} >{children}</div>
  )
}
