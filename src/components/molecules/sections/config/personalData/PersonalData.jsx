//import ConfigForm from "../../../configForm/ConfigForm";
import { useTranslation } from "react-i18next";
import CartelPlanUno from "../../../CartelPlanUno/CartelPlanUno";

export default function PersonalData() {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      style={{
        width: "35%",
        height: "350px",
        display: "flex",
        justifyContent: "start",
      }}
    >
      <CartelPlanUno
        margin
        width={"100%"}
        title={t("plan 1.cartel plan 1.title")}
        text_7={t("plan 1.cartel plan 1.text_7")}
        text_6={t("plan 1.cartel plan 1.text_6")}
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
