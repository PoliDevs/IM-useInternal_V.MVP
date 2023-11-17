import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import PaymentMethods from '../../sections/config/PaymentMethods/PaymentMethods';
import PersonalData from '../../sections/config/personalData/PersonalData';
import ComerceData from '../../sections/config/comerceData/ComerceData';
import LargeButton from '../../../atom/LargeButton/LargeButton';
import LogoLocal from '../../sections/menu/logoLocal/LogoLocal';
import s from './layoutConfig.module.scss';

export default function LayoutConfig() {
  const [t, i18n] = useTranslation("global");
  const personalData = t("config.select.personal data");
  const businessData = t("config.select.business data");
  const paymentData = t("config.select.payment methods");
  const localLogo = t("menu.local logo");
  const [selectedOption, setSelectedOption] = useState(personalData);

  const optionToComponent = {
    [t("config.select.personal data")]: <PersonalData />,
    [t("config.select.business data")]: <ComerceData />,
    [t("config.select.payment methods")]: <PaymentMethods />,
    [t("menu.local logo")]: <LogoLocal />,
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
        />
        <LargeButton
          text={businessData}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(businessData)}
        />
        <LargeButton
          text={paymentData}
          icon={"arrowRight"}
          onClick={() => handleOptionClick(paymentData)}
        />
        <LargeButton
          text={localLogo}
          icon={"arrowRight"}
          disabled={true}
        //   onClick={() => handleOptionClick(localLogo)}
        />
      </section>
      {optionToComponent[selectedOption]}
    </div>
  );
}
