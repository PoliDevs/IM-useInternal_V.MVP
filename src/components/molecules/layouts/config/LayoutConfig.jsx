import React, { useState } from 'react';
import s from './layoutConfig.module.scss';
import LargeButton from '../../../atom/LargeButton/LargeButton';
import { useTranslation } from "react-i18next";
import PersonalData from '../../sections/config/personalData/PersonalData';
import ComerceData from '../../sections/config/comerceData/ComerceData';
import PaymentMethods from '../../sections/config/PaymentMethods/PaymentMethods';

export default function LayoutConfig() {
    const [t,i18n]= useTranslation("global");
    const personalData=t("config.select.personal data");
    const businessData=t("config.select.business data");
    const paymentData=t("config.select.payment methods");
    const [selectedOption, setSelectedOption] = useState(personalData);
    
    const optionToComponent = {
        [t("config.select.personal data")]: <PersonalData />,
        [t("config.select.business data")]: <ComerceData />,
        [t("config.select.payment methods")]: <PaymentMethods />,
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
            </section>
            {optionToComponent[selectedOption]}
        </div>
    );
}
