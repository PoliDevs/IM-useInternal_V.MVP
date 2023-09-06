import { useState } from "react";
import s from "./card.module.scss";
import { Icon, Button } from "semantic-ui-react";

export default function Card({
  status,
  id,
  numberOrder,
  hour,
  menu,
  total,
  detail,
}) {
  const [seeOrder, setSeeOrder] = useState(true);
  console.log(menu);

  const { name, cost } = menu;
  console.log(name, cost);
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
  };

  const colorButton = (arg) => {
    if (arg === "new") {
      return "#FF4A4A";
    }
    if (arg === "preparing") {
      return "#40CB5F";
    }
    if (arg === "ready") {
      return "#000000";
    }
  };

  //cambiamos el status del pedido
  const handleStatus = (value) => {
    if (value === "new") return "preparing";
    if (value === "preparing") return "ready";
  };

  return (
    <div className={s.content_card}>
      <div>
        <h4>
          Mesa {id}{" "}
          <Icon
            name={seeOrder ? "angle right" : "angle down"}
            onClick={handleSeeOrder}
          />
        </h4>
        {seeOrder ? (
          <div>
            {/* <span>{status}</span> */}
            <span>
              Pedido N°{numberOrder} - Recibido a las {hour}
            </span>
            {/*         {menu.map((cur) => {
          return (
            <article key={cur.id}>
              <span>
                {cur.amount} {cur.product}
              </span>
              <span>${cur.price}</span>
            </article>
          );
        })} */}

            {name.map((dishName, index) => (
              <article key={index}>
                <span>{dishName}</span>
                <span>{`$ ${cost[index]}`}</span>
              </article>
            ))}
            {detail ? (
              <article className={s.detail}>
                <b>Observaciones:</b>
                <span>{detail}</span>
              </article>
            ) : null}
            <div>
              <span className={s.total_price}>Total:${total || "***"} </span>
              <Button
                style={{
                  background: colorButton(status),
                  padding: "3px",
                  color: "white",
                  margin: "0 0 5px 0",
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
