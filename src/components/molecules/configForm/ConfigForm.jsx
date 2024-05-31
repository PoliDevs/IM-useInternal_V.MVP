import React, { useState, useEffect } from "react";
import s from "./configForm.module.scss";
import SubTitle from "../../atom/subTitle/SubTitle";
import LabelInput from "../../atom/labelInput/LabelInput";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function ConfigForm({ commerceId, paymentMethodId, onSuccess, keysConfigured }) {
  const [t, i18n] = useTranslation("global");
  const [publicKey, setPublicKey] = useState("");
  const [accesToken, setAccesToken] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchConfigStatus() {
      try {
        const response = await axios.get(`/payment/configStatus/${paymentMethodId}`);
        if (response.data.configured) {
          setPublicKey(response.data.publicKey);
          setAccesToken(response.data.accesToken);
        }
      } catch (error) {
        console.error("Error al obtener el estado de configuración:", error);
      }
    }

    fetchConfigStatus();
  }, [paymentMethodId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        commerceId,
        publicKey,
        accesToken,
        alias: "true", // Indicador de que las claves han sido configuradas
      };
      const response = await axios.put(`/payment/updateKeys/${paymentMethodId}`, payload);
      if (response.status === 200) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error al actualizar las claves de pago:", error);
    }
    setLoading(false);
  };

  return (
    <section>
      <SubTitle text={t("config.payment market.title")} />
      <form onSubmit={handleSubmit}>
        <LabelInput
          text={t("config.payment market.input_1")}
          type="password"
          name="publicKey"
          value={publicKey}
          onChange={(e) => setPublicKey(e.target.value)}
          disabled={keysConfigured}
        />
        <LabelInput
          text={t("config.payment market.input_2")}
          type="password"
          name="accesToken"
          value={accesToken}
          onChange={(e) => setAccesToken(e.target.value)}
          disabled={keysConfigured}
        />
        <div className={s.buttonContainer}>
          <button
            className={`${s.button} ${keysConfigured ? s.disabled : ""}`}
            type="submit"
            disabled={keysConfigured || loading}
          >
            {loading ? "Guardando..." : "GUARDAR"}
          </button>
        </div>
      </form>
    </section>
  );
}
