import LineText from "../../../atom/LineText/LineText";
import s from "./orderItem.module.scss";

export default function OrderItem({ amount, name, cost, detail }) {
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
          <LineText bold={true} text={"Observaciones : "} />
          <LineText text={detail} disabled />
        </div>
      )}
    </article>
  );
}
