import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PaymentMethods from "../../sections/config/PaymentMethods/PaymentMethods";
import ChangePlan from "../../sections/config/changePlan/ChangePlan";
import PersonalData from "../../sections/config/personalData/PersonalData";
import ComerceData from "../../sections/config/comerceData/ComerceData";
import LargeButton from "../../../atom/LargeButton/LargeButton";
import LogoComerce from "../../sections/config/logoComerce/LogoComerce";
import s from "./layoutConfig.module.scss";

export default function LayoutConfig() {
  const [t] = useTranslation("global");
  const personalData = t("config.select.personal data");
  const businessData = t("config.select.business data");
  const paymentData = t("config.select.payment methods");
  const changePlan = t("Recibir pedidos");
  const localLogo = t("menu.local logo");
  const [selectedOption, setSelectedOption] = useState(personalData);
  const planNumber = useSelector((state) => state.user_internal.commercialPlan);

  const optionToComponent = {
    [personalData]: <PersonalData />,
    [businessData]: <ComerceData />,
    [paymentData]: <PaymentMethods />,
    [changePlan]: <ChangePlan />,
    [localLogo]: <LogoComerce />,
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={s.containerd}>
      <section>
        <LargeButton
          text={personalData}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(personalData)}
          selected={selectedOption === personalData}
          disabled={planNumber === 1}
        />
        <LargeButton
          text={businessData}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(businessData)}
          selected={selectedOption === businessData}
          disabled={planNumber === 1}
        /> 
        <LargeButton
          text={localLogo}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(localLogo)}
          selected={selectedOption === localLogo}
        />
        <LargeButton
          text={changePlan}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(changePlan)}
          selected={selectedOption === changePlan}
        />
        <LargeButton
          text={paymentData}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(paymentData)}
          selected={selectedOption === paymentData}
          disabled={planNumber === 1}
        />
      </section>
      {optionToComponent[selectedOption]}
    </div>
  );
}
