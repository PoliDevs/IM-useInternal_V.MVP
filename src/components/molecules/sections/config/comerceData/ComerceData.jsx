import ConfigForm from "../../../configForm/ConfigForm";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LineText from "../../../../atom/LineText/LineText";
import Title from "../../../../atom/Title/Title";
import Loading from "../../../../atom/loading/Loading";
import { Button } from "semantic-ui-react";
import CartelPlanUno from "../../../CartelPlanUno/CartelPlanUno";
import { toast } from "react-hot-toast";

export default function ComerceData() {
  const [t, i18n] = useTranslation("global");
  const [commerceData, setCommerceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    neighborhood: "",
    address: "",
    workSchedule: "",
    email: "",
    phono: "",
    commercialPlanId: "",
  });

  const comerceId = useSelector((state) => state.user_internal.comerceId);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/commerce/detail/${comerceId}`);
        if (response.data && response.data.length > 0) {
          setCommerceData(response.data[0]);
          setFormData(response.data[0]);
        }
      } catch (error) {
        console.error("Error al cargar datos del comercio:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [comerceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`/commerce/update/${comerceId}`, formData);
      toast.success('Listo, los datos se guardaron',{duration: 3000})
    } catch (error) {
      toast.error('Hubo un error al actualizar los datos',{duration: 3000})
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title text={t("config.business data.title")} />
          {commerceData ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop:'20px'}}>
              <div>
                <label>{t("config.business data.name")}</label>
                <input
                  type="text"
                  name="name"
                  value={(formData.name).charAt(0).toUpperCase() +(formData.name).slice(1).toLowerCase() }
                  onChange={handleChange}
                />
              </div>
              {/*<div>
                <label>{t("config.business data.neighborhood")}</label>
                <input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
          />
          </div>*/}
              <div>
                <label>{t("config.business data.address")}</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>{t("config.business data.workSchedule")}</label>
                <input
                  type="text"
                  name="workSchedule"
                  value={formData.workSchedule}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>{t("config.business data.email")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>{t("config.business data.phono")}</label>
                <input
                  type="text"
                  name="phono"
                  value={formData.phono}
                  onChange={handleChange}
                />
              </div>
              {/*<div>
                <label>{t("config.business data.commercialPlanId")}</label>
                <input
                  type="text"
                  name="commercialPlanId"
                  value={formData.commercialPlanId}
                  onChange={handleChange}
                />
        </div>*/}
              <Button secondary type="submit">{t("config.business data.save")}</Button>
            </form>
          ) : (
            <p>{t("config.business data.no_data")}</p>
          )}
        </>
      )}
    </section>
  );
}
