import React from "react";
import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Link from "../../../atom/Link/Link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LayoutDashboard() {
  const comerceId = useSelector((state) => state.user.comerceId);
  const [allOrders, setAllOrders] = useState([]); // Estado local para almacenar la respuesta de la solicitud
  console.log(allOrders);

  const renderOrdesCards = (status) => {
    return statusTables(status).map((cur) => (
      <Card
        key={cur.id}
        status={cur.status}
        table_numberOrder={cur.order}
        detail={cur.detail}
        hour={cur.hour}
        width={88}
        /* menu={cur.menu ? cur.menu.dishes : null}
        total={cur.menu ? cur.menu.cost : null} 
        amound
        product
        price*/
      />
    ));
  };

  useEffect(() => {
    axios(`/order/orderes/${comerceId}`)
      .then((response) => {
        const data = response.data;
        setAllOrders(data); // Almacena la respuesta en el estado local
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  }, []);

  const statusTables = (status) => {
    return allOrders.filter((cur) => cur.status === status);
  };

  return (
    <div className={s.content_LayoutDashboard}>
      <div>
        <Link
          content={"Nuevos"}
          color={"#4B47FF"}
          number={statusTables("orderPlaced").length}
        />
        {renderOrdesCards("orderPlaced")}
      </div>
      <div>
        <Link
          content={"Preparando"}
          color={"#FF4A4A"}
          number={statusTables("preparing").length}
        />
        {renderOrdesCards("preparing")}
      </div>
      <div>
        <Link
          content={"Listo"}
          color={"#40CB5F"}
          number={statusTables("ready").length}
        />
        {renderOrdesCards("ready")}
      </div>
    </div>
  );
}
