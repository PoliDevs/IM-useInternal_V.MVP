import { useEffect, useState } from "react";
import s from "./card.module.scss";
import { Icon, Button } from "semantic-ui-react";
import { ReactComponent as Rappi } from "../../../assets/rappi.svg";
import OrderItem from "./orderItem/OrderItem";
import Paragraph from "../../atom/Paragraph/Paragraph";
import LineText from "../../atom/LineText/LineText";
import axios from "axios";
import { useSelector } from "react-redux";


//import {extractTableAndOrderNumbers} from './card'

export default function Card({
  status,
  tableNumber,
  sectorNumber,
  order,
  hour,
  delivery,
  total,
  menu,
  products,
  dishes,
  additionals,
  width,
}) {
  const comerceId=useSelector(state=>state.user.comerceId)

  const [seeOrder, setSeeOrder] = useState(true);//con esto mostramos o ocultamos la orden, icon

  const numOrder = order.split("-")[1].trim();

  const handleSeeOrder = () => {
    setSeeOrder(!seeOrder);
  };

  const getStatus = (arg) => {
    if (arg === "orderPlaced") {
      return "Pasar a preparando";
    }
    if (arg === "orderInPreparation") {
      return "Pasar a listo";
    }
    if (arg === "orderReady") {
      return "Pasar a entregado";
    }
    if (arg === "delivered") {
      return "entregado";
    }
  };
  console.log(status);
  const colorButton = (arg) => {
    if (arg === "orderPlaced") {
      return "#FF4A4A";
    }
    if (arg === "orderInPreparation") {
      return "#40CB5F";
    }
    if (arg === "orderReady") {
      return "#000000";
    }
    if (arg === "delivered") {
      return "#000000";
    }
  };

  //cambiamos el status del pedido
  const handleStatus = async(status,order) => {
    let newStatus="";
    if(status==="orderPlaced"){newStatus="orderInPreparation"}
    if(status==="orderInPreparation"){newStatus="orderReady"}
    if(status==="orderReady"){newStatus="delivered"}
    await axios.put(`order/change-status/${order}/${comerceId}`,{status:newStatus})
  };
  return (
    <div className={s.content_card} style={{ width:width?`${width}px`:"376px"}}>
      <div>
        <h4>
          {delivery ? (
            <Rappi
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          ) : (
            `Sector ${sectorNumber} Mesa ${tableNumber}`
          )}
          <Icon
            name={seeOrder ? "angle right" : "angle down"}
            onClick={handleSeeOrder}
          />
        </h4>
        {seeOrder ? (
          <div>
            <Paragraph
              start
              text={`Pedido N° ${numOrder} - Recibido a las ${hour.slice(0, 5)}`}
            />
            {menu &&
              menu.name.map((cur, idx) => {
                return (
                  <OrderItem
                    key={idx}
                    amount={menu.amount[idx]}
                    name={cur}
                    cost={menu.cost[idx]}
                    detail={menu.detail[idx].length > 0 && menu.detail[idx]}
                  />
                );
              })}
            {products &&
              products.name.map((cur, idx) => {
                /*                 return (
                  <article key={idx}>
                    <span>
                      {products.amount[idx]} {cur}
                    </span>
                    <span>${products.cost[idx]}</span>
                    <hr />
                    {products.detail[idx].length>0&&<span>{products.detail[idx]}</span> }
                  </article>
                ); */
                return (
                  <OrderItem
                    key={idx}
                    amount={products.amount[idx]}
                    name={cur}
                    cost={products.cost[idx]}
                    detail={
                      products.detail[idx].length > 0 && products.detail[idx]
                    }
                  />
                );
              })}
            {dishes &&
              dishes.name.map((cur, idx) => {
                return (
                  <OrderItem
                    key={idx}
                    amount={dishes.amount[idx]}
                    name={cur}
                    cost={dishes.cost[idx]}
                    detail={dishes.detail[idx].length > 0 && dishes.detail[idx]}
                  />
                );
              })}
            {additionals &&
              additionals.name.map((cur, idx) => {
                return (
                  <OrderItem
                    key={idx}
                    amount={additionals.amount[idx]}
                    name={cur}
                    cost={additionals.cost[idx]}
                    detail={
                      additionals.detail[idx].length > 0 &&
                      additionals.detail[idx]
                    }
                  />
                );
              })}
            <div>
              <LineText bold text={`Total:$ ${total || "***"}`} />
              <Button
              onClick={()=>handleStatus(status,order)}
              /* value={status,order} */
                style={{
                  background: colorButton(status),
                  padding: "7px",
                  color: "white",
                  margin: "0 0 5px 0",
                  fontSize: "16px", // Añadir esta línea para el tamaño de la fuente
                  borderRadius: "10px",
                }}
              >
                {getStatus(status)}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
