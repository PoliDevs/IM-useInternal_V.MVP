import OpenLocal from "../../organisms/dashboard/openLocal/OpenLocal";
import ClosedLocal from "../../organisms/dashboard/closedLocal/ClosedLocal";
import s from "./dashboard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { localOpen } from "../../../redux/actions";


export default function Dashboard() {
/*   const localValue = useSelector((state) => state.local); */
  const comerceId = useSelector((state) => state.user.comerceId);
  const localOpenValue=useSelector(state=>state.localOpenValue)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(localOpen(comerceId));
  }, [comerceId]);

  return (
    <div className={s.container_dashboard}>
      {localOpenValue ? <OpenLocal header={true}/> : <ClosedLocal />}
    </div>
  );
}
