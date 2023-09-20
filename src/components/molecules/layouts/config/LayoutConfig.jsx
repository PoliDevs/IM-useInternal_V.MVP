import React, { useState } from 'react';
import Loading from '../../../atom/loading/Loading';
import s from './layoutConfig.module.scss';
import LargeButton from '../../../atom/LargeButton/LargeButton';
import { useTranslation } from "react-i18next";
import { renderContentRight } from '../../../../utils/functions';

export default function LayoutConfig() {
    const { t, i18n } = useTranslation();
    const [selectedOption, setSelectedOption] = useState("datosPersonales");
    
    const contentDescription = renderContentRight(selectedOption);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className={s.containerd}>
            <section>
                <LargeButton
                    text={"Datos personales"}
                    icon={"arrowRight"}
                    onClick={() => handleOptionClick("datosPersonales")}
                />
                <LargeButton
                    text={"Datos de negocio"}
                    icon={"arrowRight"}
                    onClick={() => handleOptionClick("datosNegocio")}
                />
                <LargeButton
                    text={"Mercado pago"}
                    icon={"arrowRight"}
                    onClick={() => handleOptionClick("mercadoPago")}
                />
            </section>
            {contentDescription && React.createElement(contentDescription.component, contentDescription.props)}
        </div>
    );
}
