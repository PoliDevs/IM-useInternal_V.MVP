import React from "react";
import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Link from "../../../atom/Link/Link";

export default function LayoutDashboard() {
  const orders = useSelector((state) => state.orders);
  const renderOrdesCards = (status) => {
    return statusTables(status).map((cur) => (
      <Card
        key={cur.id}
        status={cur.status}
        id={cur.id}
        detail={cur.detail}
        numberOrder={cur.order[cur.order.length-1]}
        hour={cur.hour}
        menu={cur.menu? cur.menu.dishes :null}
        total={cur.menu? cur.menu.cost :null}
      />
    ));
  };

  const statusTables = (status) => {
    return orders.filter((cur) => cur.status === status);
  };

  return (
    <div className={s.content_LayoutDashboard}>
      <div>
        <Link content={"Nuevos"} color={"#4B47FF"} number={statusTables("new").length} />
        {renderOrdesCards("orderPlaced")}
      </div>
      <div>
      <Link content={"Preparando"} color={"#FF4A4A"} number={statusTables("preparing").length} />
        {renderOrdesCards("preparing")}
      </div>
      <div>
      <Link content={"Listo"} color={"#40CB5F"} number={statusTables("ready").length} />
        {renderOrdesCards("ready")}
      </div>
    </div>
  );
};