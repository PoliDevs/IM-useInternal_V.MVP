import React, { useState, useEffect } from "react";
import axios from "axios";
import ConfigForm from "../../../configForm/ConfigForm";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";
import { useSelector } from "react-redux";
import s from "./paymentMethods.module.scss";
import Loading from "../../../../atom/loading/Loading";
import { ReactComponent as MpLogo } from "../../../../../assets/MpLogo.svg";
import { Banknotes } from "../../../../atom/iconsHerocoins/icons";
import Title from "../../../../atom/Title/Title";
import { toast } from "react-hot-toast";

export default function PaymentMethods() {
  const [t, i18n] = useTranslation("global");
  const [paymentMethods, setPaymentMethods] = useState(null);
  const [cash, setCash] = useState(false);
  const [mp, setMp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isChangingMp, setIsChangingMp] = useState(false);
  const [isChangingCash, setIsChangingCash] = useState(false);
  const comerceId = useSelector((state) => state.user_internal.comerceId);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/payment/all/${comerceId}`);
        setPaymentMethods(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar datos de pago:", error);
      }
    }
    fetchData();
  }, [comerceId]);

  useEffect(() => {
    if (paymentMethods) {
      const mpValue = paymentMethods.find((cur) => cur.type === "mercadopago");
      const cashValue = paymentMethods.find((cur) => cur.type === "efectivo");
      setMp(mpValue);
      setCash(cashValue);
    }
  }, [paymentMethods]);

  const handlePaymentMethods = async (
    change,
    setChange,
    paymentMethod,
    setPaymentMethod,
    oppositeMethod,
    setOppositeMethod
  ) => {
    if (change) return;

    setChange(true);

    try {
      // Si ambos métodos están desactivados, no permitir la desactivación del método actual
      if (paymentMethod.active && !oppositeMethod.active) {
        toast.error("Debe haber al menos un método de pago activo");
        setChange(false);
        return;
      }

      // Si el método opuesto está activo, desactívalo primero
      if (oppositeMethod.active) {
        const oppositeResponse = await axios.put(
          `/payment/inactive/${oppositeMethod.id}`
        );
        if (oppositeResponse.status === 200) {
          setOppositeMethod({ ...oppositeMethod, active: false });
        }
      }

      // Cambia el estado del método de pago actual
      const response = await axios.put(
        `/payment/${
          paymentMethod.active ? "inactive" : "active"
        }/${paymentMethod.id}`
      );

      if (response.status === 200) {
        setPaymentMethod({ ...paymentMethod, active: !paymentMethod.active });
      }
    } catch (error) {
      console.error("Error al cambiar el estado del método de pago:", error);
    }

    setChange(false);
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title text={t("Elegí los medios de pago")} marginBottom />
          <article className={s.contentOption}>
            <Banknotes heigth={40}/>
            <h2>Pagar al mozo </h2>
            <Switch
              onChange={() =>
                handlePaymentMethods(
                  isChangingCash,
                  setIsChangingCash,
                  cash,
                  setCash,
                  mp,
                  setMp
                )
              }
              checked={cash ? cash.active : false}
              disabled={isChangingCash}
            />
          </article>
          <div className={s.descriptionBox}>
            <p>
              Al habilitarlo tus clientes podrán hacer pedidos sin pagar. Luego
              tendrás que cobrarles por fuera de iMenu.
            </p>
          </div>
          <article className={s.contentOption}>
            <MpLogo
              style={{
                width: "40px",
                height: "40px",
              }}
            />
            <h2>Mercado Pago</h2>
            <Switch
              onChange={() =>
                handlePaymentMethods(
                  isChangingMp,
                  setIsChangingMp,
                  mp,
                  setMp,
                  cash,
                  setCash
                )
              }
              checked={mp ? mp.active : false}
              disabled={isChangingMp}
            />
          </article>
          <div className={s.descriptionBox}>
            <p>
              Tus clientes pagarán antes de completar el pedido. Recibirás el
              dinero en tu cuenta de Mercado Pago.
            </p>
          </div>
          {mp && mp.active && !loading ? (
            <ConfigForm
              commerceId={comerceId}
              paymentMethodId={mp.id}
              onSuccess={() =>
                toast.success("Listo, las credenciales se guardaron", {
                  duration: 3000,
                })
              }
            />
          ) : null}
        </>
      )}
    </section>
  );
}
