import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Loading from "../../../../atom/loading/Loading";
import { toast } from "react-hot-toast";
import styles from "./changePlan.module.scss";
import ChangePlanModal from "../../../modals/changePlanModal/ChangePlanModal.jsx";


export default function ChangePlan() {
  const [t] = useTranslation("global");
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [newPlan, setNewPlan] = useState("");

  const comercioId = useSelector((state) => state.user_internal.comerceId);
  const planNumber = useSelector((state) => state.user_internal.commercialPlan);

  useEffect(() => {
    if (planNumber) {
      setSelectedPlan(planNumber === 1 ? "m1" : "m2");
      setLoading(false);
    }
  }, [comercioId, planNumber]);

  const handlePlanChange = (e) => {
    const selectedValue = e.target.value;
    setNewPlan(selectedValue);
    setModalOpen(true);
  };

  const confirmPlanChange = async () => {
    setModalOpen(false);
    setLoading(true);
    try {
      await axios.put(`/commerce/plan/${comercioId}`, { plan: newPlan });
      setSelectedPlan(newPlan); // Actualizar el plan seleccionado después de la solicitud
      toast.success('Plan actualizado correctamente', { duration: 3000 });
    } catch (error) {
      toast.error('Hubo un error al actualizar el plan', { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>{t("Seleccioná la versión deseada")}</h1>
          <form className={styles.changePlanContainer}>
            <div
              className={`${styles.planOption} ${selectedPlan === "m1" ? styles.selected : ""}`}
              onClick={() => setNewPlan("m1")}
            >
              <div>
                <h4>Versión 1</h4>
                <p>Tus clientes podrán solamente ver el menú</p>
              </div>
              <input
                type="radio"
                id="plan1"
                name="plan"
                value="m1"
                checked={selectedPlan === "m1"}
                onChange={handlePlanChange}
              />
            </div>
            <div
              className={`${styles.planOption} ${selectedPlan === "m2" ? styles.selected : ""}`}
              onClick={() => setNewPlan("m2")}
            >
              <div>
                <h4>Versión 2</h4>
                <p>Tus clientes podrán ver el menú, realizar pedidos y pagar</p>
              </div>
              <input
                type="radio"
                id="plan2"
                name="plan"
                value="m2"
                checked={selectedPlan === "m2"}
                onChange={handlePlanChange}
              />
            </div>
          </form>
          <ChangePlanModal
            open={modalOpen}
            title={`Estas por pasar a ${newPlan === "m1" ? "Versión 1" : "Versión 2"}`}
            text={`Tus clientes podrán ${newPlan === "m1" ? "solamente ver el menú" : "pedir y pagar desde sus teléfonos y recibirás lo pedidos en la “pantalla de operación” "}`}
            text_2="Al confirmar se cerrará tu sesión y deberás volver a ingresar."
            text_3="Luego deberás configurar el medio de pago desde:"
            text_4="Opciones > Configuración > Métodos de pago"
            plan={newPlan}
            handleModal={closeModal}
            text_confirm="Confirmar"
            text_cancel="Cancelar"
            confirmAction={confirmPlanChange}
          />
        </>
      )}
    </section>
  );
}
