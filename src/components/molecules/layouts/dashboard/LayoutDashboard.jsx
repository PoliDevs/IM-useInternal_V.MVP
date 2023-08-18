import s from './layoutDashboard.module.scss';
import Card from '../../card/Card';

export default function LayoutDashboard() {
  return (
    <div className={s.content_LayoutDashboard}>
      <div>
        <Card status={"Nuevo"} />
      </div>
      <div>
      <Card status={"Preparando"}/>
      </div>
      <div>
      <Card status={"Listo"}/>
      </div>
    </div>
  )
}
