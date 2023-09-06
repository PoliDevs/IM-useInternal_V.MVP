import s from "./layoutSales.module.scss";
import { useTranslation } from "react-i18next";

export default function LayoutSales() {
  let week = [250,290,350,380, 400, 430, 470];
  const [t, i18n] = useTranslation(["global"]);
  return (
    <div className={s.containerd}>
      <div className={s.content_1}>
        <span>{t("internal.sales.this week")}</span>
        <br />
        <span>
        {t("internal.sales.weekly Total")}:$<b style={{fontWeight:"700"}} >{"550"} </b>
        </span>
        <div className={s.grafico}>
          {week.map((cur) =>{
                         const maxValue = 270;
                         const normalizedHeight = (cur / maxValue) * 100;
                         return  <article key={cur}>
                         <span>${cur}</span>
                         <div style={{ height: normalizedHeight }}></div>
                         <span>{"L"}</span>
                         </article>
                        }
                         )}
        </div>
      </div>
      <div className={s.content_2}>
        <span>{t("internal.sales.today")}</span>
        <div>
        <div className={s.orders} >
          <span>{`${t("internal.sales.today you sold")} $${350200}`} </span>
        </div>
        <div className={s.sales}>
          <span>{t("internal.sales.today you received")} {350} {t("internal.sales.orders")} </span>
        </div>
      </div>
        </div>
    </div>
  );
}