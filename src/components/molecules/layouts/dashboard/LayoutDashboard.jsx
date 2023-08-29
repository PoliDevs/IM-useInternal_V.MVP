import React from "react";
import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Link from "../../../atom/Link/Link";

export default function LayoutDashboard() {
  const tables = useSelector((state) => state.tables);

  const renderTableCards = (status) => {
    return statusTables(status).map((cur) => (
      <Card
        key={cur.id}
        status={cur.status}
        id={cur.id}
        numberOrder={cur.orders[cur.orders.length - 1].numberOrder}
        date={cur.orders[cur.orders.length - 1].date}
        menu={cur.orders[cur.orders.length - 1].menú}
        total={cur.orders[cur.orders.length - 1].total}
      />
    ));
  };

  const statusTables = (status) => {
    return tables.filter((cur) => cur.status === status);
  };

  return (
    <div className={s.content_LayoutDashboard}>
      <div>
        <Link content={"Nuevos"} color={"#4B47FF"} number={statusTables("new").length} />
        {renderTableCards("new")}
      </div>
      <div>
      <Link content={"Preparando"} color={"#FF4A4A"} number={statusTables("preparing").length} />
        {renderTableCards("preparing")}
      </div>
      <div>
      <Link content={"Listo"} color={"#40CB5F"} number={statusTables("ready").length} />
        {renderTableCards("ready")}
      </div>
    </div>
  );
};