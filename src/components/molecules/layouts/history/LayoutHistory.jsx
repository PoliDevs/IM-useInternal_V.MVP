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
/*   console.log(getDateCurrent()); */
const date=getDateCurrent();
console.log(date)
  const comerceId = useSelector((state) => state.user.comerceId);
  const [isLoading, setIsLoading] = useState(false);

  const [selectDatePiker, setSelectDatePiker] = useState(null); // Estado para la fecha seleccionada solo para el piker
  const [selectDate, setSelectDate] = useState(date); // Estado para la fecha seleccionada

  const [orderDate, setOrderDate] = useState([]); // todas las orders de un dia seleccionado, por default es la fecha actual

  //nesesito filtrar las ordenes para que me queden solo las delivered
  const orderDelivered = orderDate.filter((cur) => cur.status === "delivered");
  console.log(orderDelivered)
  const { t, i18n } = useTranslation();

  useEffect(() => {
/*     const timeout = setTimeout(() => { */
      setIsLoading(true);

      //harcodeado
      //axios(`order/paidOrderes/${comerceId}?startDate=2023-09-27&endDate=2023-09-27`)
      //oficial
      axios(`order/paidOrderes/${comerceId}?startDate=${selectDate}&endDate=${selectDate}`)
        .then((response) => {
          const data = response.data;
          setOrderDate(data); // Almacena la respuesta en el estado local
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
    const newDate = date.toLocaleDateString(i18n.language, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(/\//g, '-'); // Reemplaza las barras con guiones
    setSelectDate(newDate.split("-").reverse().join("-"));
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
                  {selectDate===date?"hoy":selectDate.split("-").reverse().join("/") /* .toLocaleDateString(i18n.language, {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  }) */}
                </span>
                <div className={s.containerd_card}>
                  {isLoading?<Loading/>: orderDelivered.map((cur, idx) => {
                   return <Card
                      key={idx}
                      tableNumber={cur.po && cur.po.id}
                      sectorNumber={cur.sector && cur.sector.id}
                      order={cur.order}
                      hour={cur.hour}
                      status={cur.status}
                      delivery={cur.delivery}
                      total={cur.paid}
                      width={300}
                      menu={cur.menu && cur.menu.name[0].length > 0 && cur.menu}
                      products={
                        cur.products &&
                        cur.products.name[0].length > 0 &&
                        cur.products
                      }
                      dishes={
                        cur.dishes &&
                        cur.dishes.name[0].length > 0 &&
                        cur.dishes
                      }
                      additionals={
                        cur.additionals &&
                        cur.additionals.name[0].length > 0 &&
                        cur.additionals
                      }
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
