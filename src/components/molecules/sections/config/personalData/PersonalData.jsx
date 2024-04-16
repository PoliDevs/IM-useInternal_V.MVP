//import ConfigForm from "../../../configForm/ConfigForm";
import { useTranslation } from "react-i18next";
import CartelPlanUno from "../../../CartelPlanUno/CartelPlanUno";

export default function PersonalData() {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      style={{
        width: "60%",
        height: "230px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <CartelPlanUno
        margin
        width={"100%"}
        title={t("plan 1.cartel plan 1.title")}
        text_1={t("plan 1.cartel plan 1.text_1")}
        text_2={t("plan 1.cartel plan 1.text_2")}
      />
    </section>
  );
}

/* return (
  <ConfigForm
    subTitle_text={t("config.personal data.title")}
    label_text_1={t("config.personal data.input_1")}
    label_text_2={t("config.personal data.input_2")}
  />
); */
