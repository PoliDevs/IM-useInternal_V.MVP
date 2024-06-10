import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PaymentMethods from "../../sections/config/PaymentMethods/PaymentMethods";
import PersonalData from "../../sections/config/personalData/PersonalData";
import ComerceData from "../../sections/config/comerceData/ComerceData";
import LargeButton from "../../../atom/LargeButton/LargeButton";
import LogoComerce from "../../sections/config/logoComerce/LogoComerce";
import s from "./layoutConfig.module.scss";
import CartelPlanUno from "../../CartelPlanUno/CartelPlanUno";

export default function LayoutConfig() {
  const [t, i18n] = useTranslation("global");
  const personalData = t("config.select.personal data");
  const businessData = t("config.select.business data");
  const paymentData = t("config.select.payment methods");
  const localLogo = t("menu.local logo");
  const [selectedOption, setSelectedOption] = useState(personalData);
  const planNumber = useSelector((state) => state.user_internal.commercialPlan);

  const optionToComponent = {
    [t("config.select.personal data")]: <PersonalData />,
    [t("config.select.business data")]: <ComerceData />,
    [t("config.select.payment methods")]: <PaymentMethods />,
    [t("menu.local logo")]: <LogoComerce />,
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
          text={paymentData}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(paymentData)}
          selected={selectedOption === paymentData}
          disabled={planNumber === 1}
        />
        <LargeButton
          text={"Logo del local"}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(localLogo)}
          selected={selectedOption === localLogo}

        />
      </section>
      {optionToComponent[selectedOption]}
    </div>
  );
}
