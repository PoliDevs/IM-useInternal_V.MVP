import s from './container.module.scss';

export default function Container({children,marginTop}) {
  return (
    <div className={s.containerd} style={marginTop?{marginTop:"51px",marginBottom:"51px"}:null} >{children}</div>
  )
}
