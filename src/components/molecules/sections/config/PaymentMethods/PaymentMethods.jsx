import ConfigForm from "../../../configForm/ConfigForm";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import SubTitle from "../../../../atom/subTitle/SubTitle";
import { useSelector } from "react-redux";
import s from "./paymentMethods.module.scss";
import axios from "axios";
import Loading from "../../../../atom/loading/Loading";
import { ReactComponent as MpLogo } from "../../../../../assets/MpLogo.svg";

export default function PaymentMethods() {
  const [t, i18n] = useTranslation("global");
  const [paymentMethods, setPaymentMethods] = useState(null);
  const [mp, setMp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isChangingMp, setIsChangingMp] = useState(false); // Estado para controlar si se está cambiando el estado de mp

  const comerceId = useSelector((state) => state.user_internal.comerceId);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://nodejs-production-bbf9.up.railway.app/payment/all/${comerceId}`
        );
        setPaymentMethods(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar datos de pago:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (paymentMethods) {
      const mpValue = paymentMethods.find((cur) => cur.type === "mercadopago");
      setMp(mpValue);
    }
  }, [paymentMethods]);

  const handleMp = async () => {
    if (isChangingMp) return; // Evita múltiples clics mientras se está realizando una solicitud

    setIsChangingMp(true); // Marcar que se está cambiando el estado de mp
    try {
      const response = await axios.put(
        `https://nodejs-production-bbf9.up.railway.app/payment/${
          mp.active ? "inactive" : "active"
        }/${mp.id}`
      );
      if (response.status === 200) {
        // La solicitud se completó con éxito, actualiza el estado del interruptor
        setMp({ ...mp, active: !mp.active });
      }
    } catch (error) {
      console.error("Error al cambiar el estado de Mercado Pago:", error);
    }

    setIsChangingMp(false); // Restablecer el estado después de completar la solicitud
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <article className={s.contentOption}>
          <MpLogo
            style={{
              width: "40px",
              height: "40px",
            }}
          />
          <SubTitle text={"Mercado pago"} />
          <Switch
            onChange={handleMp}
            checked={mp ? mp.active : false}
            disabled={isChangingMp}
          />
        </article>
      )}
      {mp && mp.active && !loading ? (
        <ConfigForm
          subTitle_text={t("config.payment market.title")}
          label_text_1={t("config.payment market.input_1")}
          label_text_2={t("config.payment market.input_2")}
        />
      ) : null}
    </section>
  );
}
