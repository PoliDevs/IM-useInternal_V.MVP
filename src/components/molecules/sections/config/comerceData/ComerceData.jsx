import ConfigForm from "../../../configForm/ConfigForm"
import { useTranslation } from "react-i18next";

export default function ComerceData() {
  const [t,i18n]=useTranslation("global");
  return (
    <ConfigForm
    subTitle_text={t("config.business data.title")}
    label_text_1={t("config.business data.input_1")}
    label_text_2= {t("config.business data.input_2")}
    />
  )
}
