import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Link from "../../../atom/subTitleUnderline/SubTitleUnderline";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonGreen from "../../../atom/buttons/ButtonGreen";
import { getDateCurrent } from "../../../../utils/functions";

export default function LayoutDashboard({interval}) {
  const comerceId = useSelector((state) => state.user.comerceId);
  const [allOrders, setAllOrders] = useState([]); // Almacenamos todas las ordenes
  const dateCurrent = getDateCurrent(); //fecha actual
  const [filterClickedButton, setFilterClickedButton] = useState("Todos"); //filtrado
  
  const renderOrdesCards = (status,) => {
    const statusOrder = statusTables(status);
    return (
      statusOrder.length > 0 &&
      statusOrder.map((cur, idx) => (
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
          //news
          accountemail={cur.accountemail} 
          accountname={cur.accountname}
          googleemail={cur.googleemail}

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
      ))
    );
  };

  useEffect(() => {
    const fetchData = () => {
      if (filterClickedButton === "Pedidos en local") {
        axios(
          `order/orderesNotDelivery/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}`
        )
          .then((response) => {
            const data = response.data;
            setAllOrders(data);
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
          });
      } else if (filterClickedButton === "Pedidos por plataforma") {
        axios(
          `order/orderesDelivery/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}`
        )
          .then((response) => {
            const data = response.data;
            setAllOrders(data);
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
          });
      } else {
        axios(
          `order/paidOrderes/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}`
        )
          .then((response) => {
            const data = response.data;
            setAllOrders(data);
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
          });
      }
    };

    // Ejecutar fetchData inmediatamente
    if(!interval) {return fetchData()}
    else{
      const intervalId =setInterval(fetchData, 5000);
      
      // Limpia el intervalo si el componente se desmonta
      return () => clearInterval(intervalId);
    }

    // Establecer un intervalo para ejecutar fetchData cada 3 segundos
/*     if(interval){
      console.log("interval true") */
      //fetchData()
/*     }else{
      const intervalId =setInterval(fetchData, 5000);
      
      // Limpia el intervalo si el componente se desmonta
       () => clearInterval(intervalId);
    } */
  }, [filterClickedButton]);

  const statusTables = (status) => {
    return allOrders.filter((cur) => cur.status === status);
  };
  /* console.log(allOrders) */
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
  );
}
