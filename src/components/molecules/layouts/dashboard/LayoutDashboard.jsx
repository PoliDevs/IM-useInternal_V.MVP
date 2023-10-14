import s from "./layoutDashboard.module.scss";
import Card from "../../card/Card.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SubTitleUnderline from "../../../atom/subTitleUnderline/SubTitleUnderline";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonGreen from "../../../atom/buttons/ButtonGreen";
import { getDateCurrent} from "../../../../utils/functions";

export default function LayoutDashboard({interval}) {
  const comerceId = useSelector((state) => state.user.comerceId);
  const [allOrders, setAllOrders] = useState([]); // Almacenamos todas las ordenes
  const dateCurrent = getDateCurrent(); //fecha actual
  const [filterClickedButton, setFilterClickedButton] = useState("Todos"); //filtrado
  const [cardStatusChanged, setCardStatusChanged] = useState(false);

  // Función para manejar cambios de estado en las tarjetas
const handleCardStatusChange = (newStatus, orderId) => {
  // Realiza la lógica necesaria para manejar el cambio de estado de la tarjeta aquí
  console.log(`Cambiar el estado de la tarjeta a: ${newStatus}, Orden: ${orderId}`);

  // Actualiza el estado para indicar que hubo cambios en las tarjetas
  setCardStatusChanged(true);

  // Puedes realizar operaciones adicionales aquí, como actualizar datos en el servidor o modificar el estado local
};

  const renderOrdesCards = (status,) => {
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
      return  axios(
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
       return axios(
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

    if (cardStatusChanged) {
      fetchData();
      // Restablece el estado de cardStatusChanged a false
      setCardStatusChanged(false);
    }
      fetchData()

     // const intervalId =setInterval(fetchData, 9000);
      // Limpia el intervalo si el componente se desmonta
      // () => clearInterval(intervalId);

  }, [filterClickedButton,cardStatusChanged /* renderOrdesCards */]);

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
              <SubTitleUnderline
                content={"Nuevos"}
                color={"#4B47FF"}
                number={statusTables("orderPlaced").length}
              />
              {renderOrdesCards("orderPlaced")}
            </section>
            <section>
              <SubTitleUnderline
                content={"Preparando"}
                color={"#FF4A4A"}
                number={statusTables("orderInPreparation").length}
              />
              {renderOrdesCards("orderInPreparation")}
            </section>
            <section>
              <SubTitleUnderline
                content={"Listo"}
                color={"#40CB5F"}
                number={statusTables("orderReady").length}
              />
              {renderOrdesCards("orderReady")}
            </section>
          </div>
        </div>
  );
};