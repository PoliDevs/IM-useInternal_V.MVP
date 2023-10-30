import OpenLocal from "../../organisms/dashboard/openLocal/OpenLocal";
import ClosedLocal from "../../organisms/dashboard/closedLocal/ClosedLocal";
import s from "./dashboard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { localOpen } from "../../../redux/actions";
import LayoutContainer from "../../molecules/layouts/section/LayoutContainer";
import Loading from "../../atom/loading/Loading";
import { useState } from "react";


export default function Dashboard() {
  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const localOpenValue=useSelector(state=>state.localOpenValue)
  const [loader,setLoader]=useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(localOpen(comerceId));
    setTimeout(()=>setLoader(false),500)
  }, [comerceId]);

  return (
    <div/*  className={s.container_dashboard} */>
    {loader?
      <Loading center bold/>
      :
      localOpenValue ? <OpenLocal/> : <ClosedLocal />
    }
    </div>
  );
}
