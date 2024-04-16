import Header from "../../molecules/Header/Header";
import Container from "../../atom/container/Container";
import LayoutContainer from "../../molecules/layouts/section/LayoutContainer";
import LayoutSales from "../../molecules/layouts/sales/LayoutSales";
import { useTranslation } from "react-i18next";
import CartelPlanUno from "../../molecules/CartelPlanUno/CartelPlanUno";
import { useSelector } from "react-redux";
import ContentColumn from "../../atom/contentColumn/ContentColumn";
import ContentRow from "../../atom/contentRow/ContentRow";
import Separator from "../../atom/separator/Separator";
import ContentBasic from "../../atom/contentBasic/ContentBasic";
import Title from "../../atom/Title/Title";
import HugeTitle from "../../atom/HugeTitle/HugeTitle";

export default function Sales() {
  const [t, i18n] = useTranslation("global");
  const planNumber = useSelector((state) => state.user_internal.commercialPlan);
  console.log(planNumber);
  return (
    <Container>
      <Header
        icon="sales"
        title={t("header.sales.text")}
        detail={t("header.sales.detail")}
      />
      {planNumber === 1 ? (
        <LayoutContainer margin={"-5px"} padding="0 2rem">
          <ContentColumn
            width={"100%"}
            alignItems={"center"}
            justifyContent={"start"}
          >
            <CartelPlanUno
              width={"610px"}
              title={t("plan 1.cartel plan 1.title")}
              text_1={t("plan 1.cartel plan 1.text_1")}
              text_2={t("plan 1.cartel plan 1.text_2")}
              marginBooton="10px"
            />
            <Separator height={"10px"} />
            <ContentRow
              width={"100%"}
              height={"600px"}
              justifyContent={"space-between"}
            >
              <ContentBasic
                width={"48%"}
                borderRadius={"25px"}
                backgroundImage={`url("../../../../sales_plan1.jpeg")`}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
              />
              <ContentColumn
                width={"48%"}
                borderRadius={"25px"}
                background={"#F0F0F0"}
                justifyContent={"space-evenly"}
                alignItems={"start"}
              >
                <HugeTitle fontWeight={"100"} text={t("sales.today")} color={"#BABABA"} />
                <ContentColumn
                  width={"90%"}
                  height={"140px"}
                  border={"2px solid #BABABA"}
                  borderRadius={"50px"}
                  justifyContent={"center"}
                  alignItems={"start"}
                  padding={"0 0px 0 20px"}
                >
                  <HugeTitle fontSize={"30px"} fontWeight={"100"} text={t("sales.today you sold")} color={"#BABABA"}  />
                  <HugeTitle text="$ 0" color={"#BABABA"} />

                </ContentColumn>
                <ContentColumn
                  width={"90%"}
                  height={"140px"}
                  border={"2px solid #BABABA"}
                  borderRadius={"50px"}
                  justifyContent={"center"}
                  alignItems={"start"}
                  padding={"0 0px 0 20px"}
                  background={"#FF4747"}
                >
                  <HugeTitle fontSize={"30px"} fontWeight={"100"} text={t("sales.today you received")} color={"#BABABA"} />
                  <HugeTitle fontSize={"30px"} fontWeight={"100"} text="$ 0" color={"#BABABA"} />
                </ContentColumn>
              </ContentColumn>
            </ContentRow>
          </ContentColumn>
        </LayoutContainer>
      ) : (
        <LayoutContainer>
          <LayoutSales />
        </LayoutContainer>
      )}
    </Container>
  );
}
