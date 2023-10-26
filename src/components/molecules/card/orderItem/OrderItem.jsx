import LineText from "../../../atom/LineText/LineText";
import s from "./orderItem.module.scss";
import { useTranslation } from "react-i18next";

export default function OrderItem({ amount, name, cost, detail }) {
  const [t,i18n]=useTranslation("global");
  const detailItem = detail;
  const costEnd=cost===0;

  return (
    <article>
      <div className={s.content_1}>
        <LineText text={`${amount}  ${name}`} disabled />
        <LineText text={costEnd?"":`$${cost}`} disabled />
      </div>
      {!detailItem? null : (
        <div className={s.content_2}>
          <LineText bold={true} text={`${t("card.observations")} : `} />
          <LineText text={detail} disabled wordWrap />
        </div>
      )}
    </article>
  );
}
