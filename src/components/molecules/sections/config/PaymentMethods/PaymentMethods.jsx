// import ConfigForm from "../../../configForm/ConfigForm";
// import { useTranslation } from "react-i18next";
// import Switch from "react-switch";
// import { useState, useEffect } from "react";
// import SubTitle from "../../../../atom/subTitle/SubTitle";
// import { useSelector } from "react-redux";
// import s from "./paymentMethods.module.scss";
// import axios from "axios";
// import Loading from "../../../../atom/loading/Loading";

// export default function PaymentMethods() {
//   const [t, i18n] = useTranslation("global");
//   const [paymentMethods, setPaymentMethods] = useState(null);
//   const [mp, setMp] = useState(false);

//   const [loading, setLoading] = useState(true);

//   const comerceId = useSelector((state) => state.user_internal.comerceId);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           `https://nodejs-production-bbf9.up.railway.app/payment/all/${comerceId}`
//         );
//         setPaymentMethods(response.data);
//         setLoading(false)
//       } catch (error) {
//         console.error("Error al cargar datos de pago:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (paymentMethods) {
//       const mpValue = paymentMethods.find((cur) => cur.type === "mercadopago");
//       setMp(mpValue.active);
//     }
//   }, [paymentMethods]);

//   const handleMp = async () => {
//     try {
//       if (mp) {
//         // Desactivar Mercado Pago
//         await axios.put(`https://nodejs-production-bbf9.up.railway.app/payment/inactive/${comerceId}`);
//       } else {
//         // Activar Mercado Pago
//         await axios.put(`https://nodejs-production-bbf9.up.railway.app/payment/active/${comerceId}`);
//       }
//       // Actualizar el estado de mp después de la solicitud
//       setMp(!mp);
//     } catch (error) {
//       console.error("Error al cambiar el estado de Mercado Pago:", error);
//     }
//   };
  
//   return (
//     <section>
//       {loading ? (
//         <Loading />
//       ) : (
//         <article className={s.contentOption}>
//           <SubTitle text={"Mercado pago"} />
//           <Switch onChange={handleMp} checked={mp} />
//         </article>
//       )}
//       {mp&& !loading ? (
//         <ConfigForm
//           subTitle_text={t("config.payment market.title")}
//           label_text_1={t("config.payment market.input_1")}
//           label_text_2={t("config.payment market.input_2")}
//         />
//       ) : null}
//     </section>
//   );
// }

import ConfigForm from "../../../configForm/ConfigForm";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import SubTitle from "../../../../atom/subTitle/SubTitle";
import { useSelector } from "react-redux";
import s from "./paymentMethods.module.scss";
import axios from "axios";
import Loading from "../../../../atom/loading/Loading";

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
      setMp(mpValue.active);
    }
  }, [paymentMethods]);

  const handleMp = async () => {
    if (isChangingMp) return; // Evita múltiples clics mientras se está realizando una solicitud

    setIsChangingMp(true); // Marcar que se está cambiando el estado de mp

    try {
      const response = await axios.put(
        `https://nodejs-production-bbf9.up.railway.app/payment/${mp ? "inactive" : "active"}/${comerceId}`
      );
      console.log(response)
      if (response.status === 200) {
        // La solicitud se completó con éxito, actualiza el estado del interruptor
        setMp(!mp);
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
          <SubTitle text={"Mercado pago"} />
          <Switch onChange={handleMp} checked={mp} disabled={isChangingMp} />
        </article>
      )}
      {mp && !loading ? (
        <ConfigForm
          subTitle_text={t("config.payment market.title")}
          label_text_1={t("config.payment market.input_1")}
          label_text_2={t("config.payment market.input_2")}
        />
      ) : null}
    </section>
  );
}
