import {  useState } from "react";
import s from "./card.module.scss";
import {Button } from "semantic-ui-react";
import { ReactComponent as Rappi } from "../../../assets/rappi.svg";
import { ReactComponent as PedidosYa } from "../../../assets/pedidosYa.svg";
import OrderItem from "./orderItem/OrderItem";
import Paragraph from "../../atom/Paragraph/Paragraph";
import LineText from "../../atom/LineText/LineText";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Chevron_right,Chevron_down } from "../../atom/iconsHerocoins/icons";

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
  //news
  accountemail,
  accountname,
  googleemail,
  //
  onStatusChange, // Nuevo prop para manejar cambios de estado en el componente padre
}) {
  const [t,i18n]=useTranslation("global")
  const orderPlaced=t("card.order placed");
  const orderInPreparation=t("card.order in preparation");
  const orderReady=t("card.order ready");
  const delivered=t("card.delivered");
  const comerceId=useSelector(state=>state.user_internal.comerceId)

  const [seeOrder, setSeeOrder] = useState(true);//con esto mostramos o ocultamos la orden, icon

  const numOrder = order.split("-")[1].trim();

  const handleSeeOrder = () => {
    setSeeOrder(!seeOrder);
  };


  //busca el status de la order para cambiar el texto del boton
  const textButtonStatus={
    orderPlaced:orderPlaced,
    orderInPreparation:orderInPreparation,
    orderReady:orderReady,
    delivered:delivered
  }
const textButton=(value)=>textButtonStatus[value];

  const statusColorButton={
    orderPlaced:"#FF4A4A",
    orderInPreparation:"#40CB5F",
    orderReady:"#000000",
    delivered:"#000000",
  }
  const colorButton = (arg) => statusColorButton[arg];

  //cambiamos el status del pedido
  const handleStatus = async(status,order) => {
    let newStatus="";
    if(status==="orderPlaced"){newStatus="orderInPreparation"}
    if(status==="orderInPreparation"){
      newStatus="orderReady";
     return await axios.put(`order/status-ready/${order}/${comerceId}`,{status:newStatus,
      accountemail,
      accountname,
      googleemail
    })
    }
    if(status==="orderReady"){newStatus="delivered"}
    await axios.put(`order/change-status/${order}/${comerceId}`,{status:newStatus})
  };
  return (
    <div className={s.content_card} style={{minWidth:"250px",maxWidth:"376px" , /* width:width?`${width}px`:null  */}}>
      <div>
        <h4>
          {delivery ? (
            <PedidosYa
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          ) : (
            `${t("card.sector")}  ${sectorNumber} ${t("card.table")}  ${tableNumber}`
          )}
          {seeOrder?<Chevron_right  heigth={24} onClick={handleSeeOrder} />:<Chevron_down heigth={24}  onClick={handleSeeOrder}/>}
        </h4>
        {seeOrder ? (
          <div>
            <Paragraph
              start
              text={`${t("card.order")} N° ${numOrder} - ${t("card.received at")} ${hour.slice(0, 5)}`}
            />
            {menu &&
              menu.name.map((cur, idx) => {
                return (
                  <OrderItem
                    key={idx}
                    amount={menu.amount[idx]}
                    name={cur}
                    cost={menu.cost[idx]*menu.amount[idx]}
                    detail={menu.detail[idx].length > 0 && menu.detail[idx]}
                  />
                );
              })}
            {products &&
              products.name.map((cur, idx) => {
                return (
                  <OrderItem
                    key={idx}
                    amount={products.amount[idx]}
                    name={cur}
                    cost={products.cost[idx]*products.amount[idx]}
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
                    amount={dishes.amount[idx]*dishes.amount[idx]}
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
                    cost={additionals.cost[idx]*additionals.cost[idx]}
                    detail={
                      additionals.detail[idx].length > 0 &&
                      additionals.detail[idx]
                    }
                  />
                );
              })}
            <div>
              <LineText bold text={`${t("card.total")} :$ ${total || "***"}`} />
              <Button
              onClick={()=>{
                handleStatus(status,order);
                const newStatus =  textButton(status) //getStatus(status); // Calcula el nuevo estado aquí
                onStatusChange(newStatus,numOrder); // Llama a la función con el nuevo estado
              }}
                style={{
                  background:colorButton(status),
                  padding: "7px",
                  color: "white",
                  margin: "0 0 5px 0",
                  fontSize: "16px",
                  borderRadius: "10px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)"; // Escala el botón al 110% en hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)"; // Devuelve el botón a su tamaño original al salir del hover
                }}
              >
                {textButton(status)}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};