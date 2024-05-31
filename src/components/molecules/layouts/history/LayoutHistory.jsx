import { useState, useEffect } from "react";
import Loading from "../../../atom/loading/Loading";
import s from "./layoutHistory.module.scss";
import { useTranslation } from "react-i18next";
import DatePickerComponent from "../../calendar/DatePickerComponent";
import Card from "../../card/Card.jsx";
import { getDateCurrent } from "../../../../utils/functions";
import { useSelector } from "react-redux";
import axios from "axios";

export default function LayoutHistory() {
const todayDate=getDateCurrent();

  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const [isLoading, setIsLoading] = useState(false);

  const [selectDatePiker, setSelectDatePiker] = useState(null); // Estado para la fecha seleccionada solo para el piker
  const [selectDate, setSelectDate] = useState(todayDate); // Estado para la fecha seleccionada

  const [orderDate, setOrderDate] = useState([]); // todas las orders de un dia seleccionado, por default es la fecha actual

  //nesesito filtrar las ordenes para que me queden solo las delivered
  const orderDelivered = orderDate.filter((cur) => cur.status === "delivered");
 /*  console.log(orderDelivered) */
   //const [t,i18n]=useTranslation("global");
   const [t,i18n]=useTranslation("global");
   const parseOrdersToJson = (orders) => {
    return orders.map(order => {
      // Parsea los campos que están en formato JSON
      order.additionals = JSON.parse(order.additionals);
      order.products = JSON.parse(order.products);
      order.dishes = JSON.parse(order.dishes);
      order.menu = JSON.parse(order.menu);

      return order;
    });
  };

  useEffect(() => {
/*     const timeout = setTimeout(() => { */
      setIsLoading(true);

      //harcodeado
      //axios(`order/paidOrderes/${comerceId}?startDate=2023-09-27&endDate=2023-09-27`)
      //oficial
      axios(`order/paidOrderes/${comerceId}?startDate=${selectDate}&endDate=${selectDate}`)
        .then((response) => {
          const data = response.data;
          const parsedData = parseOrdersToJson(data); // Parsea los datos recibidos// Establece los datos parseados en el estado
          setOrderDate(parsedData); // Almacena la respuesta en el estado local
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
/*     }, 1000);
    return () => clearTimeout(timeout); */
  }, [selectDate]);

  // actualizar la fecha seleccionada
  const handleDateChange = (date) => {
    setSelectDatePiker(date)
    if(date){
      const newDate = date.toLocaleDateString(i18n.language, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).replace(/\//g, '-'); // Reemplaza las barras con guiones
      setSelectDate(newDate.split("-").reverse().join("-"));
    }else{
      setSelectDate(todayDate)
    }
  };
  
  return (
    <div className={s.containerd}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DatePickerComponent
            selectedDate={selectDatePiker} // Pasa la fecha seleccionada como prop
            onDateChange={handleDateChange} // Pasa la función para actualizar la fecha seleccionada
          />
          <div>
              <div className={s.content_date}>
                <span className={s.date}>
                  {selectDate===todayDate?t("history.today") :selectDate/* .split("-").reverse().join("/") */ /* .toLocaleDateString(i18n.language, {
                  }) */}
                </span>
                <div className={s.containerd_card}>
                  {isLoading?<Loading/>: orderDelivered.map((cur, idx) => {
                   return <Card
                      key={idx}
                      id={cur.id}
                      tableNumber={cur.po && cur.po.id}
                      sectorNumber={cur.sector && cur.sector.id}
                      order={cur.order}
                      hour={cur.hour}
                      status={cur.status}
                      delivery={cur.delivery}
                      total={cur.paid}
                      width={320}
                      offButtons={true}
                      history={true}
                      menu={cur.menu && cur.menu.name && cur.menu.name.length > 0 && cur.menu}
                      products={cur.products && cur.products.name && cur.products.name.length > 0 && cur.products}
                      dishes={cur.dishes && cur.dishes.name && cur.dishes.name.length > 0 && cur.dishes}
                      additionals={cur.additionals && cur.additionals.name && cur.additionals.name.length > 0 && cur.additionals}
                      
                    />;
                  })}
                </div>
              </div>
          </div>
        </>
      )}
    </div>
  );
}