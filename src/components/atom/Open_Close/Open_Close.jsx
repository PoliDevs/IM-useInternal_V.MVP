import Title from "../Title/Title";
import s from "./Open_Close.module.scss";
import { useTranslation } from "react-i18next";

export default function Open_Close() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={s.open_close}>
      <div style={{ width: "200px", margin: "0 auto" }}>
        <Title text={t("instructions.steps.text_3")} />
      </div>
      <div className={s.open_closeImage}></div>
    </div>
  );
}
