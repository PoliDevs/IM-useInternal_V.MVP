import ConfigForm from "../../../configForm/ConfigForm"
import { useTranslation } from "react-i18next"

export default function PersonalData() {
  const [t,i18n]=useTranslation("global");
  return (
    <ConfigForm
    subTitle_text={t("config.personal data.title")}
    label_text_1= {t("config.personal data.input_1")}
    label_text_2= {t("config.personal data.input_2")}
    />
  )
}
