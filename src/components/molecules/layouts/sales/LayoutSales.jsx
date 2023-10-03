/* import s from "./layoutSales.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect,useState } from "react";

export default function LayoutSales() {
  //let week = [250,290,350,380, 400, 430, 470];
  const comerceId=useSelector(state=>state.user.comerceId)
  const [weekordes,setWeekorders]=useState([]);
  useEffect(()=>{
    //harcodeada
    axios(`order/vtas/${comerceId}?dateFrom=2023-09-25&dateTo=2023-10-02`)
  },[])
  const [t, i18n] = useTranslation(["global"]);
  return (
    <div className={s.containerd}>
      <div className={s.content_1}>
        <span>{t("internal.sales.this week")}</span>
        <br />
        <span>
          {t("internal.sales.weekly Total")}:$
          <b style={{ fontWeight: "700" }}>{"550"} </b>
        </span>
        <div className={s.grafico}>
          <SalesChart />
        </div>
      </div>
      <div className={s.content_2}>
        <span>{t("internal.sales.today")}</span>
        <div>
          <div className={s.orders}>
            <span>{`${t("internal.sales.today you sold")} $${350200}`} </span>
          </div>
          <div className={s.sales}>
            <span>
              {t("internal.sales.today you received")} {350}{" "}
              {t("internal.sales.orders")}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

export function SalesChart() {
  const week = [250, 290, 350, 380, 400, 430, 470];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: "#000", // Todas las barras serán rojas
    xaxis: {
      categories: ["L", "M", "M", "J", "V", "S", "D"],
      labels: {
        style: {
          fontSize: "20px",
        },
      },
    },
    yaxis: {
      show: false, // Oculta el eje y
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `$${val}`;
      },
      offsetY: 500,
      style: {
        colors: ["#000"], // Establece el color del texto en negro
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "55%", // Ancho de las barras
        endingShape: "rounded", // Forma de las barras (puede ser "rounded", "flat", etc.)
        borderRadius: 18,
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: week,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      className={s.apex}
    />
  );
}
 */
//!! oficial
/* import s from "./layoutSales.module.scss";
import { useTranslation } from "react-i18next";

export default function LayoutSales() {
  //let week = [250,290,350,380, 400, 430, 470];
  const [t, i18n] = useTranslation(["global"]);
  return (
    <div className={s.containerd}>
      <div className={s.content_1}>
        <span>{t("internal.sales.this week")}</span>
        <br />
        <span>
          {t("internal.sales.weekly Total")}:$
          <b style={{ fontWeight: "700" }}>{"550"} </b>
        </span>
        <div className={s.grafico}>
          <SalesChart />
        </div>
      </div>
      <div className={s.content_2}>
        <span>{t("internal.sales.today")}</span>
        <div>
          <div className={s.orders}>
            <span>{`${t("internal.sales.today you sold")} $${350200}`} </span>
          </div>
          <div className={s.sales}>
            <span>
              {t("internal.sales.today you received")} {350}{" "}
              {t("internal.sales.orders")}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ReactApexChart from "react-apexcharts";

export function SalesChart() {
  const week = [250, 290, 350, 380, 400, 430, 470];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: "#000", // Todas las barras serán rojas
    xaxis: {
      categories: ["L", "M", "M", "J", "V", "S", "D"],
      labels: {
        style: {
          fontSize: "20px",
        },
      },
    },
    yaxis: {
      show: false, // Oculta el eje y
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return `$${val}`;
      },
      offsetY: 500,
      style: {
        colors: ["#000"], // Establece el color del texto en negro
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "55%", // Ancho de las barras
        endingShape: "rounded", // Forma de las barras (puede ser "rounded", "flat", etc.)
        borderRadius: 18,
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: week,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      className={s.apex}
    />
  );
} */

import s from "./layoutSales.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDateCurrent } from "../../../../utils/functions";

export default function LayoutSales() {
  //let week = [250,290,350,380, 400, 430, 470];
  const [t, i18n] = useTranslation(["global"]);
  const [week, setWeek] = useState(null);
  const date=getDateCurrent();
  const comerceId = useSelector((state) => state.user.comerceId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `order/vtas/${comerceId}?dateFrom=2023-09-25&dateTo=${date}`
        );
        // Actualiza el estado con los datos obtenidos
        setWeek(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
  
    fetchData(); // Llama a la función fetchData
  }, []); // Asegúrate de pasar un arreglo vacío como segundo argumento para que se ejecute solo una vez
  

  const totalWeek=week&&week.reduce((acc,cur)=>acc+ cur.tot_diario,0);//total dinero de la semana
  const totalWeekOrders=week&&week.reduce((acc,cur)=>acc+ cur.pedidos,0);//total ordenes vendidas de la semana
  const totalOrToday=week&&week.map(cur=>cur.tot_diario);//dinero ganado por dia
  const today_orders_money=week&&week.find(cur=>cur.date===date);// pedidos y ventas de hoy

/* console.log(today_orders_money) */

  return (
    <div className={s.containerd}>
      <div className={s.content_1}>
        <span>{t("internal.sales.this week")}</span>
        <br />
        <span>
          {t("internal.sales.weekly Total")}:$
          <b style={{ fontWeight: "700" }}>{totalWeek} </b>
        </span>
        <div className={s.grafico}>
          <SalesChart week={totalOrToday&&totalOrToday} />
        </div>
      </div>
      <div className={s.content_2}>
        <span>{t("internal.sales.today")}</span>
        <div>
          <div className={s.orders}>
            <span>{`${t("internal.sales.today you sold")} $${week&&today_orders_money.tot_diario}`} </span>
          </div>
          <div className={s.sales}>
            <span>
              {t("internal.sales.today you received")} {week&&today_orders_money.pedidos}{" "}
              {t("internal.sales.orders")}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
/* import axios from "axios";
import { useSelector } from "react-redux"; */

export function SalesChart({ week }) {
/*   const weeks = [250, 290, 350, 380, 400, 430, 470]; */

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: "#000", // Todas las barras serán rojas
    xaxis: {
      categories: ["L", "M", "M", "J", "V", "S", "D"],
      labels: {
        style: {
          fontSize: "20px",
        },
      },
    },
    yaxis: {
      show: false, // Oculta el eje y
    },
    dataLabels: {
      enabled: true || 0,
      formatter: function (val) {
        return `$${val}`;
      },
      offsetY: 500,
      style: {
        colors: ["#000"], // Establece el color del texto en negro
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "55%", // Ancho de las barras
        endingShape: "rounded", // Forma de las barras (puede ser "rounded", "flat", etc.)
        borderRadius: 18,
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: week,
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      className={s.apex}
    />
  );
}
