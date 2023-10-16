import s from './container.module.scss';

export default function Container({children}) {
  return (
    <div className={s.containerd}>{children}</div>
  )
}
