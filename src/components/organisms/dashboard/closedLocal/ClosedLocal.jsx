import s from "./closedLocal.module.scss";
import { useSelector } from "react-redux";
import { Store } from "../../../atom/iconsHerocoins/icons";
import { useState, useEffect } from "react";
import { getDateCurrent } from "../../../../utils/functions";
import axios from "axios";
import LayoutDashboard from "../../../molecules/layouts/dashboard/LayoutDashboard";
import LayoutContainer from "../../../molecules/layouts/section/LayoutContainer";
import Container from "../../../atom/container/Container";
import Header from "../../../molecules/Header/Header";
import { useTranslation } from "react-i18next";

export default function ClosedLocal({ open }) {
  const [t,i18n]=useTranslation("global")
  const [allOrders, setAllOrders] = useState([]);
  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const dateCurrent = getDateCurrent();
  const [filterClickedButton, setFilterClickedButton] = useState("Todos"); //filtrado
  useEffect(() => {
    const fetchData = async () => {
      await axios(
        `order/paidOrderes/${comerceId}?startDate=${dateCurrent}&endDate=${dateCurrent}`
      )
        .then((response) => {
          const data = response.data;
          setAllOrders(data);
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud:", error);
        });
    };
    fetchData();
  }, []);

  const statusTables = (status) => {
    //filtra por status
    return allOrders.filter((cur) => cur.status === status);
  };
  return (
    <Container>
      <div className={s.centered_content}>
        {/*       <Store heigth={"36px"} />
      <h2>{"Local cerrado"}</h2>
      <span>{"Abre el local para comenzar"}</span>
      <br />
      <span>{" a recibir pedidos"}</span> */}
        <Header
          off
          icon="storeClosed"
          title={t("header.closed local.premises closed")}
          detail={t(`header.closed local.open the store to start`)}
          detail_2={t(`header.closed local.to receive orders`)}
        />
        {statusTables("orderPlaced").length > 0 ||
        statusTables("orderInPreparation").length ||
        statusTables("orderReady").length ? (
          <LayoutContainer>
            <LayoutDashboard interval={true} />
          </LayoutContainer>
        ) : null}
      </div>
    </Container>
  );
}
