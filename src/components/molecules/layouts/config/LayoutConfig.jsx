import React, { useState } from 'react';
import Loading from '../../../atom/loading/Loading';
import s from './layoutConfig.module.scss';
import LargeButton from '../../../atom/LargeButton/LargeButton';
import { useTranslation } from "react-i18next";
import SubTitle from '../../../atom/subTitle/SubTitle';
import LabelInput from '../../../atom/labelInput/LabelInput';

export default function LayoutConfig() {
    const { t, i18n } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const renderContent = () => {
        switch (selectedOption) {
            case "datosPersonales":
                return (
                    <section>
                        <SubTitle text="Datos Personales" />
                        <>
                            <LabelInput text="Nombre y apellido" type="text"/>
                            <LabelInput text="Teléfono" type="number"/>
                        </>
                    </section>
                );
            case "datosNegocio":
                return (
                    <section>
                        <SubTitle text="Datos de negocio" />
                        <>
                            <LabelInput text="Nombre del negocio" type="text"/>
                            <LabelInput text="Teléfono" type="number"/>
                        </>
                    </section>
                );
            case "mercadoPago":
                return (
                    <section>
                        <SubTitle text="Mercado pago" />
                        <>
                            <LabelInput text="alias" type="text"/>
                            <LabelInput text="key mercado pago" type="text"/>
                        </>
                    </section>
                );
            default:
                return null;
        }
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
            {renderContent()}
        </div>
    );
}
