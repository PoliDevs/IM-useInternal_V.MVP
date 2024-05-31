import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SubTitleUnderline from "../../../atom/subTitleUnderline/SubTitleUnderline";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDateCurrent } from "../../../../utils/functions";
import { useTranslation } from "react-i18next";

export default function LayoutDashboard({closed}) {
  const [t,i18n]=useTranslation("global")
  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const [allOrders, setAllOrders] = useState([]); // Almacenamos todas las ordenes
  const dateCurrent = getDateCurrent(); //fecha actual
  const [cardStatusChanged, setCardStatusChanged] = useState(false);//reques al cambiar de status la card

  // Función para manejar cambios de estado en las tarjetas
  const handleCardStatusChange = (newStatus, orderId) => {
    // Actualiza el estado para indicar que hubo cambios en las tarjetas
    setCardStatusChanged(true);
  };

  const renderOrdesCards = (status) => {
    const statusOrder = statusTables(status);
    return (
      statusOrder.length > 0 &&
      statusOrder.map((cur, idx) => (
        <Card
          key={idx}
          tableNumber={cur.po && cur.po.id}
          sectorNumber={cur.sector && cur.sector.id}
          order={cur.order}
          hour={cur.hour}
          status={cur.status}
          delivery={cur.delivery}
          total={cur.paid}
          //
          onStatusChange={(newStatus, orderId) => {
            handleCardStatusChange(newStatus, orderId);
          }}
          //news
          accountemail={cur.account}
          accountname={cur.name}
          googleemail={cur.googleEmail}
          //tomamos menu , product y detail de cada orden
          //si llegara a ser un {[""]}
          menu={cur.menu && cur.menu.name && cur.menu.name.length > 0 && cur.menu}
          products={cur.products && cur.products.name && cur.products.name.length > 0 && cur.products}
          dishes={cur.dishes && cur.dishes.name && cur.dishes.name.length > 0 && cur.dishes}
          additionals={cur.additionals && cur.additionals.name && cur.additionals.name.length > 0 && cur.additionals}

        />
      ))
    );
  };

  // Función para parsear los datos de las órdenes a formato JSON
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
    const fetchData = async () => {
      try {
        const response = await axios(`order/paidOrderes/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}`);
        const data = response.data;
        const parsedData = parseOrdersToJson(data); // Parsea los datos recibidos
        setAllOrders(parsedData); // Establece los datos parseados en el estado
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };
    if (cardStatusChanged) {
      fetchData();
      // Restablece el estado de cardStatusChanged a false
      setCardStatusChanged(false);
    }
    fetchData(); // Realiza la solicitud inicial
    const intervalId = setInterval(fetchData, 5000);
    // Limpia el intervalo si el componente se desmonta
    return () => clearInterval(intervalId);
  }, [cardStatusChanged]);

  const statusTables = (status) => {
    return allOrders.filter((cur) => cur.status === status);
  };

  return (
    <div className={s.content_LayoutDashboard}>
      <div className={`${s.status_orders} ${closed&&s.status_orders_closed} `}>
        <div className={s.statusOrderNew}>
        <SubTitleUnderline
          content={t("dashboard.new")}
          color={"#FF4A4A"}
          number={statusTables("orderPlaced").length}
          status={"#orderPlaced"}
        />
        </div>
        <div className={s.statusOrderPreparing}>
        <SubTitleUnderline
          content={t("dashboard.preparing")}
          color={"#FF4A4A"}
          number={statusTables("orderReady").length}
          status={"#orderReady"}
        />
        </div>
         {/*<SubTitleUnderline
          content={t("dashboard.preparing")}
          color={"#FF4A4A"}
          number={statusTables("orderInPreparation").length}
          status={"#orderInPreparation"}
  />
        <SubTitleUnderline
          content={t("dashboard.ready")}
          color={"#40CB5F"}
          number={statusTables("orderReady").length}
          status={"#orderReady"}
  />*/}
      </div>
      <div className={s.content_orders}>
        <section className={s.content_status_orders_new} id="orderPlaced" >
          {renderOrdesCards("orderPlaced")}
        </section>
       { /*<section  className={s.content_status_orders} id="orderInPreparation" >
          {renderOrdesCards("orderInPreparation")}
        </section>*/}
        <section  className={s.content_status_orders} id="orderReady">
          {renderOrdesCards("orderReady")}
        </section>
      </div>
    </div>
  );
};
