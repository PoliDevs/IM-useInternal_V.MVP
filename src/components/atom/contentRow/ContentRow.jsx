import s from './contentRow.module.scss';

export default function ContentRow({children,justifyContent,width,height,minHeight,border,alignItems,background,borderRight,borderLeft }) {
//space-around;space-between;space-evenly;center;

  return (
    <div className={s.contentRow} style={{justifyContent,width,height,minHeight,border,alignItems,background,borderRight,borderLeft}} >{children}</div>
  )
}
