import { useState } from "react";
import s from "./card.module.scss";
import { Button } from "semantic-ui-react";
import { ReactComponent as Rappi } from "../../../assets/rappi.svg";
import { ReactComponent as PedidosYa } from "../../../assets/pedidosYa.svg";
import OrderItem from "./orderItem/OrderItem";
import Paragraph from "../../atom/Paragraph/Paragraph";
import LineText from "../../atom/LineText/LineText";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Chevron_up, Chevron_down } from "../../atom/iconsHerocoins/icons";
import ButtonCard from "../../atom/buttons/buttonCard/ButtonCard";
import ContentRow from "../../atom/contentRow/ContentRow";

export default function Card({
  id,
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
  offButtons,
  history,
  //news
  accountemail,
  accountname,
  googleemail,
  //
  onStatusChange, // Nuevo prop para manejar cambios de estado en el componente padre
}) {
  const [t, i18n] = useTranslation("global");
  //const orderPlaced = t("card.order placed");
  const orderPlaced = t(`card.order placed`);
  const orderInPreparation = t("card.order in preparation");
  const orderReady = t("card.order rgo");
  // const orderReady = t("card.order ready");
  const delivered = t("card.delivered");
  const comerceId = useSelector((state) => state.user_internal.comerceId);

  const [seeOrder, setSeeOrder] = useState(true); //con esto mostramos o ocultamos la orden, icon

  //const numOrder = order.split("-")[1].trim();
  const numOrder = id

  const handleSeeOrder = () => {
    setSeeOrder(!seeOrder);
  };

  //busca el status de la order para cambiar el texto del boton
  const textButtonStatus = {
    orderPlaced: orderPlaced,
    orderInPreparation: orderInPreparation,
    orderReady: orderReady,
    delivered: delivered,
  };
  const textButton = (value) => textButtonStatus[value];

  const statusColorButton = {
    orderPlaced: "#FF4A4A",
    orderInPreparation: "#40CB5F",
    orderReady: "#ffffff",
    delivered: "#000000",
  };
  const colorButton = (arg) => statusColorButton[arg];

  // Cambiamos el status al que sigue
  const handleStatus = async (status, order) => {
    let newStatus = "";
    if (status === "orderPlaced") {
      newStatus = "orderReady";
    }
    if (status === "orderInPreparation") {
      newStatus = "orderReady";
    }
    if (status === "orderReady") {
      newStatus = "delivered";
    }
    await axios.put(`order/change-status/${order}/${comerceId}`, {
      status: newStatus,
    });
  };

  // Cambiamos el status al anterior
  const handleStatusBack = async (status, order) => {
    let newStatus = "";
    if (status === "orderInPreparation") {
      newStatus = "orderPlaced";
    }
    if (status === "orderReady") {
      newStatus = "orderPlaced";
    }
    await axios.put(`order/change-status/${order}/${comerceId}`, {
      status: newStatus,
    });
  };

  const isGreenButton = (color) => color === "#ffffff";

  return (
    <div
      className={`${s.content_card} ${history && s.content_card_history} `}
      style={{
        minWidth: "300px",
      }}
    >
      <div>
        <h4 onClick={handleSeeOrder}>
          {delivery ? (
            <PedidosYa
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          ) : (
            ` ${t("card.table")}  ${tableNumber}`
          )}
          <div className={s.divDataPedidos}>
           <div className={s.orderNumber}>
          {`${t("card.order")} N° ${numOrder}`}
          <div className={s.orderTime}>{`${t("card.received at")} ${hour.slice(0, 5)}`}</div>
        </div></div>
          {seeOrder ? (
            <Chevron_up heigth={24} />
          ) : (
            <Chevron_down heigth={24} onClick={handleSeeOrder} />
          )}
        </h4>
        <hr className={s.divider} />
        {seeOrder ? (
          <div>
            {menu &&
              menu.name.map((cur, idx) => {
                const isLastItem = idx === menu.name.length - 1;
                return (
                  <OrderItem
                    key={idx}
                    amount={menu.amount[idx]}
                    name={cur}
                    // Multiplica por 1000 si el costo es decimal
                    cost={
                      menu.cost[idx].toString().includes('.')
                        ? menu.cost[idx] * menu.amount[idx] * 1000
                        : menu.cost[idx] * menu.amount[idx]
                    }
                    detail={menu.detail[idx].length > 0 && menu.detail[idx]}
                    isLastItem={isLastItem} // Pasa la prop isLastItem al componente OrderItem
                  />
                );
              })}
            {products &&
              products.name.map((cur, idx) => {
                if (products.amount[idx] > 0) {
                  return (
                    <OrderItem
                      key={idx}
                      amount={products.amount[idx]}
                      name={cur}
                      cost={products.cost[idx] * products.amount[idx]}
                      detail={
                        products.detail[idx].length > 0 && products.detail[idx]
                      }
                    />
                  );
                } else {
                  return null; // No renderiza el componente si la cantidad es cero
                }
              })}
            {dishes &&
              dishes.name.map((cur, idx) => {
                if (dishes.amount[idx] > 0) {
                  return (
                    <OrderItem
                      key={idx}
                      amount={dishes.amount[idx] * dishes.amount[idx]}
                      name={cur}
                      cost={dishes.cost[idx]}
                      detail={
                        dishes.detail[idx].length > 0 && dishes.detail[idx]
                      }
                    />
                  );
                } else {
                  return null; // No renderiza el componente si la cantidad es cero
                }
              })}
            {additionals &&
              additionals.name.map((cur, idx) => {
                if (additionals.amount[idx] > 0) {
                  return (
                    <OrderItem
                      key={idx}
                      amount={additionals.amount[idx]}
                      name={cur}
                      cost={additionals.cost[idx] * additionals.cost[idx]}
                      detail={
                        additionals.detail[idx].length > 0 &&
                        additionals.detail[idx]
                      }
                    />
                  );
                } else {
                  return null; // No renderiza el componente si la cantidad es cero
                }
              })}

            <div>
              <hr className={s.dividerFooter} />
              <div className={s.footer}>
                <div className={s.footerPrice}>
                  <LineText end bold text={`${t("card.total")}:`} />
                  <LineText end bold priceCard text={`$${total || "***"}`} />
                </div>
                <div className={s.footerBoton}>
                  <ContentRow
                    justifyContent={
                      status === "orderInPreparation" || status === "orderReady"
                        ? "space-between"
                        : "flex-end"
                    }
                  >
                    {status === "orderInPreparation" || status === "orderReady" ? (
                      <ButtonCard
                        iconName={"ChevronNew"}
                        iconSize
                        background={colorButton(status)}
                        onClick={() => {
                          handleStatusBack(status, order);
                          const newStatus = textButton(status); //getStatus(status); // Calcula el nuevo estado aquí
                          onStatusChange(newStatus, numOrder); // Llama a la función con el nuevo estado
                        }}
                      />
                    ) : null}
                    <ButtonCard
                      colorGreen={isGreenButton(colorButton(status))}
                      text={textButton(status)}
                      background={colorButton(status)}
                      offButtons={offButtons}
                      onClick={() => {
                        if (offButtons) return null;
                        handleStatus(status, order);
                        const newStatus = textButton(status); //getStatus(status); // Calcula el nuevo estado aquí
                        onStatusChange(newStatus, numOrder); // Llama a la función con el nuevo estado
                      }}
                    ></ButtonCard>
                  </ContentRow>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
