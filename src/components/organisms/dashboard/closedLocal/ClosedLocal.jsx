import s from "./closedLocal.module.scss";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getDateCurrent } from "../../../../utils/functions";
import axios from "axios";
import LayoutDashboard from "../../../molecules/layouts/dashboard/LayoutDashboard";
import LayoutContainer from "../../../molecules/layouts/section/LayoutContainer";
import Container from "../../../atom/container/Container";
import Header from "../../../molecules/Header/Header";
import { useTranslation } from "react-i18next";

export default function ClosedLocal({ open }) {
  const [t, i18n] = useTranslation("global");
  const [allOrders, setAllOrders] = useState([]);
  const comerceId = useSelector((state) => state.user_internal.comerceId);
  const dateCurrent = getDateCurrent();

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
  }, [allOrders]);

  const statusTables = (status) => {
    //filtra por status
    return allOrders.filter((cur) => cur.status === status);
  };
  return (
    <Container>
      <Header
        off
        icon="storeClosed"
        title={t("header.closed local.premises closed")}
        detail={t(`header.closed local.open the store to start`)}
        detail_2={t(`header.closed local.to receive orders`)}
        className={s.header}
      />
      {statusTables("orderPlaced").length > 0 ||
      statusTables("orderInPreparation").length > 0 ||
      statusTables("orderReady").length > 0 ? (
        <LayoutContainer>
          <LayoutDashboard closed />
        </LayoutContainer>
      ) : null}
    </Container>
  );
}
