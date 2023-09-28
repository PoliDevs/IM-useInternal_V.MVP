import React from "react";
import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Link from "../../../atom/subTitleUnderline/SubTitleUnderline";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonGreen from "../../../atom/buttons/ButtonGreen";
import { getDateCurrent } from "../../../../utils/functions";

export default function LayoutDashboard() {
  const comerceId = useSelector((state) => state.user.comerceId);
  const localOpenValue = useSelector((state) => state.localOpenValue);
  const [allOrders, setAllOrders] = useState([]); // Almacenamos todas las ordenes
  const dateCurrent = getDateCurrent(); //fecha actual
  const [filterClickedButton, setFilterClickedButton] = useState("Todos"); //filtrado

  const renderOrdesCards = (status) => {
    const statusOrder = statusTables(status);

    return statusOrder.map((cur, idx) => (
      <Card
        /* key={cur.id} */
        key={idx}
        tableNumber={cur.po && cur.po.id}
        sectorNumber={cur.sector && cur.sector.id}
        order={cur.order}
        hour={cur.hour}
        status={cur.status}
        delivery={cur.delivery}
        total={cur.paid}
        //tomamos menu , product y detail de cada orden
        //si llegara a ser un {[""]}
        menu={cur.menu && cur.menu.name[0].length > 0 && cur.menu}
        products={
          cur.products && cur.products.name[0].length > 0 && cur.products
        }
        dishes={cur.dishes && cur.dishes.name[0].length > 0 && cur.dishes}
        additionals={
          cur.additionals &&
          cur.additionals.name[0].length > 0 &&
          cur.additionals
        }
      />
    ));
  };

  useEffect(() => {
    //hacemos el llamado aqui sin guardar en redux por que debe de actualizarse siempre
    //axios(`/order/orderes/${comerceId}`) harcodeado
    if (filterClickedButton === "Pedidos en local") {
      axios(
        `order/orderesNotDelivery/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}` //oficial
        //`order/orderesNotDelivery/${comerceId}?startDate=2023-09-28&endDate=2023-09-28`//harcodeo
      )
        .then((response) => {
          const data = response.data;
          setAllOrders(data); // Almacena la respuesta en el estado local
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
    } else if (filterClickedButton === "Pedidos por plataforma") {
      axios(
        `order/orderesDelivery/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}` //oficial
        //`order/orderesDelivery/${comerceId}?startDate=2023-09-28&endDate=2023-09-28`//harcodeo
      )
        .then((response) => {
          const data = response.data;
          setAllOrders(data); // Almacena la respuesta en el estado local
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
    } else {
      axios(
        `order/paidOrderes/${comerceId}?startDate=2023-09-27&endDate=2023-09-27`
      )
        //este sera el oficial
        //axios(`order/paidOrderes/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}`)
        .then((response) => {
          const data = response.data;
          setAllOrders(data); // Almacena la respuesta en el estado local
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
    }
  }, [, /* renderOrdesCards */ filterClickedButton]);

  const statusTables = (status) => {
    return allOrders.filter((cur) => cur.status === status);
  };
console.log(allOrders)
  return (
    <>
      {!localOpenValue && renderOrdesCards("orderPlaced").length===0&&renderOrdesCards("orderInPreparation").length===0&&renderOrdesCards("orderReady").length===0 ? null : (
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
                number={statusTables("orderInPreparation").length}
              />
              {renderOrdesCards("orderInPreparation")}
            </section>
            <section>
              <Link
                content={"Listo"}
                color={"#40CB5F"}
                number={statusTables("orderReady").length}
              />
              {renderOrdesCards("orderReady")}
            </section>
          </div>
        </div>
      )}
    </>
  );
}
