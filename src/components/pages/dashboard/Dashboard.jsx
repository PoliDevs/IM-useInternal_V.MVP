import OpenLocal from "../../organisms/dashboard/openLocal/OpenLocal";
import s from './dashboard.scss';

export default function Dashboard() {

  return (
    <div className={s.container_dashboard}>
      <OpenLocal/>
    </div>
  )
}
