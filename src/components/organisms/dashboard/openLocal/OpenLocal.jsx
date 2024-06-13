import Header from "../../../molecules/Header/Header";
import LayoutContainer from "../../../molecules/layouts/section/LayoutContainer";
import LayoutDashboard from "../../../molecules/layouts/dashboard/LayoutDashboard";
import Container from "../../../atom/container/Container";
import { useTranslation } from "react-i18next";
import CartelPlanUno from "../../../molecules/CartelPlanUno/CartelPlanUno";
import { useSelector } from "react-redux";
import ContentColumn from "../../../atom/contentColumn/ContentColumn";
import ContentRow from "../../../atom/contentRow/ContentRow";
import SubTitleUnderline from "../../../atom/subTitleUnderline/SubTitleUnderline";
import Separator from "../../../atom/separator/Separator";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function OpenLocal() {
  const [t, i18n] = useTranslation("global");
  const planNumber = useSelector((state) => state.user_internal.commercialPlan);
  const [paymentMethods, setPaymentMethods] = useState(null);
  const comerceId = useSelector((state) => state.user_internal.comerceId);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/payment/all/${comerceId}`);
        setPaymentMethods(response.data);
      } catch (error) {
        console.error("Error al cargar datos de pago:", error);
      }
    }
    fetchData();
  }, [comerceId]);

  
  // Función para obtener el método de pago activo
  const getActivePaymentMethod = () => {
    if (paymentMethods) {
      return paymentMethods.find(method => method.active);
    }
    return null;
  };

  // Función auxiliar para obtener el detalle del método de pago activo
  const getActivePaymentMethodDetail = () => {
    const activeMethod = getActivePaymentMethod();
    return activeMethod ? activeMethod.detail : "";
  };

  return (
    <Container>
      <Header
        icon="store"
        title={`${t("header.open local.orders received")} - ${getActivePaymentMethodDetail()}`}
       
      />
      {planNumber === 1 ? (
        <LayoutContainer padding="0"  margin={"-10px"}>
          <ContentColumn
            width={"100%"}
            height={"85vh"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <CartelPlanUno
              width={"610px"}
              title={t("plan 1.cartel plan 1.title")}
              text_1={t("plan 1.cartel plan 1.text_1")}
              text_2={t("plan 1.cartel plan 1.text_2")}
              marginBooton="10px"
            />
            <Separator height="21px"/>
            <ContentRow width={"100%"}
            justifyContent={"space-around"}
            alignItems={"start"}
            >
              <SubTitleUnderline
                content={t("dashboard.new")}
                color={"#BABABA"}
                number={0}
              />
              <SubTitleUnderline
                content={t("dashboard.preparing")}
                color={"#BABABA"}
                number={0}
              />
              <SubTitleUnderline
                content={t("dashboard.ready")}
                color={"#BABABA"}
                number={0}
              />
            </ContentRow>
      <ContentRow width={"100%"} height={"450px"}>
        <ContentRow width={"33%"}/>
        <ContentRow width={"33%"}  borderLeft={"2px solid #BABABA"} borderRight={"2px solid #BABABA"}/>
        <ContentRow width={"33%"}/>
      </ContentRow>
          </ContentColumn>
        </LayoutContainer>
      ) : (
        <LayoutContainer>
          <LayoutDashboard />
        </LayoutContainer>
      )}
    </Container>
  );
}
