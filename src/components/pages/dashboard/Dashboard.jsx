import OpenLocal from "../../organisms/dashboard/openLocal/OpenLocal";
import ClosedLocal from '../../organisms/dashboard/closedLocal/ClosedLocal'
import s from './dashboard.module.scss';
import {useSelector} from "react-redux/es/hooks/useSelector";

export default function Dashboard() {
  const localValue=useSelector(state=>state.local)
  return (
    <div className={s.container_dashboard}>
      {
        localValue?<OpenLocal/> :<ClosedLocal/>
      }
    </div>
  )
}
