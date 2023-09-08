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
  width,
}) {
  const [seeOrder, setSeeOrder] = useState(true);
  console.log(menu);

  /*   const { name, cost,amount } = menu; */
  /*   console.log(name, cost,amount); */
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
    if (arg === "new") {
      return "#FF4A4A";
    }
    if (arg === "preparing") {
      return "#40CB5F";
    }
    if (arg === "ready") {
      return "#000000";
    }
    if (arg === "delivered") {
      return "#000000";
    }
  };

  //cambiamos el status del pedido
  const handleStatus = (value) => {
    if (value === "new") return "preparing";
    if (value === "preparing") return "ready";
  };

  return (
    <div className={s.content_card} style={{ width: "25%" }}>
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
            <span>
              Pedido N°{numberOrder} - Recibido a las {hour}
            </span>
            {menu &&
              menu.map((cur, idx) => {
                return (
                  <article key={idx}>
                    <span>
                      {cur.amount} {cur.name}
                    </span>
                    <span>${cur.cost}</span>
                  </article>
                );
              })}
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
