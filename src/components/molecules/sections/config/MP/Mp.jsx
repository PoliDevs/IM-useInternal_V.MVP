import ConfigForm from "../../../configForm/ConfigForm"
import { useTranslation } from "react-i18next";

export default function Mp() {
  const [t,i18n]=useTranslation("global");
  return (
    <ConfigForm
    subTitle_text={t("config.payment market.title")}
    label_text_1={t("config.payment market.input_1")}
    label_text_2= {t("config.payment market.input_2")}
    />
  )
}
