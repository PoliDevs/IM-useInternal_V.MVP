import React, { useState } from 'react';
import Loading from '../../../atom/loading/Loading';
import s from './layoutConfig.module.scss';
import LargeButton from '../../../atom/LargeButton/LargeButton';
import { useTranslation } from "react-i18next";
import PersonalData from '../../sections/config/personalData/PersonalData';
import ComerceData from '../../sections/config/comerceData/ComerceData';
import Mp from '../../sections/config/MP/Mp';

export default function LayoutConfig() {
    const [t,i18n]= useTranslation("global");
    const personalData=t("config.select.personal data");
    const businessData=t("config.select.business data");
    const paymentData=t("config.select.payment market");
    console.log(personalData,businessData,paymentData)
    const [selectedOption, setSelectedOption] = useState(personalData);
    
/*     const contentDescription = renderContentRight(selectedOption); */
    const optionToComponent = {
        [t("config.select.personal data")]: <PersonalData />,
        [t("config.select.business data")]: <ComerceData />,
        [t("config.select.payment market")]: <Mp />,
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
            {/* {contentDescription && React.createElement(contentDescription.component, contentDescription.props)} */}
            {optionToComponent[selectedOption]}
        </div>
    );
}
