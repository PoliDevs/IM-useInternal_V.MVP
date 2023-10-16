import { useTranslation } from "react-i18next";
import s from "./Login.module.scss";
import GoogleButton from "../../atom/GoogleButton/GoogleButton";
import FormParagraph from "../../atom/FormParagraph/FormParagraph";
import Form from "../../molecules/Form/Form";

export default function Login() {
  const [t, i18n] = useTranslation(["global"]);

  return (
    <div className={s.mainContainer}>
      <div className={s.logo}></div>
      <div className={s.formContainer}>
        <GoogleButton text={t("internal.auth.googleAcces")} />
        <FormParagraph text={t("internal.auth.or")}/>
        <Form/>
      </div>
    </div>
  );
}
