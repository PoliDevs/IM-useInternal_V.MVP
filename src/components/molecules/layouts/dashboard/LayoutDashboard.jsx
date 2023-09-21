import React from "react";
import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Link from "../../../atom/subTitleUnderline/SubTitleUnderline";
import { useEffect, useState } from "react";
import axios from "axios";
import { allGroupedOrders, renderOrdersEnd } from "../../card/card";
import ButtonGreen from "../../../atom/buttons/ButtonGreen";

export default function LayoutDashboard() {
  const comerceId = useSelector((state) => state.user.comerceId);
  const [allOrders, setAllOrders] = useState([]); // Almacenamos todas las ordenes

  const [filterClickedButton, setFilterClickedButton] = useState("Todos");

  const renderOrdesCards = (status) => {
    const statusOrder = statusTables(status);
    //console.log(statusOrder)
    console.log(allOrders);
    console.log(renderOrdersEnd(statusOrder));
    return renderOrdersEnd(statusOrder).map((cur, idx) => (
      <Card
        //esto lo sacamos del primer indice todos deverian valer igual si son de la misma orden
        key={idx}
        orderNumber={cur.orderNumber}
        tableNumber={cur.tableNumber}
        hour={cur.hour}
        status={cur.status}
        delivery={cur.delivery}
        //tomamos menu , product y detail de cada orden
        menu={cur.menus}
        product={cur.products}
        dish={cur.dishes}
        detail={cur.details}
        //tomamos discount , promotion y surcharge de todos las ordenes
        discount={cur.discount}
        promotion={cur.promotion}
        surcharge={cur.surcharge}
      />
    ));
  };

  useEffect(() => {
    //hacemos el llamado aqui sin guardar en redux por que debe de actualizarse siempre
    //axios(`/order/orderes/${comerceId}`)
    axios(
      `order/paidOrderes/${comerceId}?startDate=2023-09-18&endDate=2023-09-18`
    )
      .then((response) => {
        const data = response.data;
        setAllOrders(allGroupedOrders(data)); // Almacena la respuesta en el estado local
        //setAllOrders(data); // Almacena la respuesta en el estado local
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  }, []);

  //para saber el status de la orden
  const statusTables = (status) => {
    return allOrders.filter((cur) => cur[0].status === status);
  };

  return (
    <div className={s.content_LayoutDashboard}>
      <div>
        <ButtonGreen
          text={"Todos"}
          active={filterClickedButton === "Todos"}
          onClick={() => setFilterClickedButton("Todos")}
        />
        <ButtonGreen
          text={"Pedidos en local"}
          active={filterClickedButton === "Pedidos en local"}
          onClick={() => setFilterClickedButton("Pedidos en local")}
        />
        <ButtonGreen
          text={"Pedidos por plataforma"}
          active={filterClickedButton === "Pedidos por plataforma"}
          onClick={() => setFilterClickedButton("Pedidos por plataforma")}
        />
      </div>
      <br />
      <div className={s.content_orders}>
        <section>
          <Link
            content={"Nuevos"}
            color={"#4B47FF"}
            number={statusTables("orderPlaced").length}
          />
          {renderOrdesCards("orderPlaced")}
        </section>
        <section>
          <Link
            content={"Preparando"}
            color={"#FF4A4A"}
            number={statusTables("preparing").length}
          />
          {/*   {renderOrdesCards("preparing")} */}
        </section>
        <section>
          <Link
            content={"Listo"}
            color={"#40CB5F"}
            number={statusTables("ready").length}
          />
          {/*  {renderOrdesCards("ready")} */}
        </section>
      </div>
    </div>
  );
}
