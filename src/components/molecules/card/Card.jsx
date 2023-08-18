import s from "./card.module.scss";

export default function Card({ status }) {
  return (
    <div className={s.content_card}>
      <h3>{status}</h3>
      <div>
        <h4>Mesa 3</h4>
        <span>Pedido N 2 -Recibido a las 23:06</span>
        <article>
          <span>1 Sandwich triple tostado</span>
          <span>$1200</span>
        </article>
        <article>
          <span>1 Sandwich triple tostado</span>
          <span>$1200</span>
        </article>
        <article>
          <span>1 Sandwich triple tostado</span>
          <span>$1200</span>
        </article>
        <article>
          <span>1 Sandwich triple tostado</span>
          <span>$1200</span>
        </article>
        <span>Total $4800</span>
      </div>
    </div>
  );
}
