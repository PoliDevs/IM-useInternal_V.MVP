import s from "./layoutSales.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDateCurrent,getLastMonday } from "../../../../utils/functions";

export default function LayoutSales() {
  const [week, setWeek] = useState(null);
  const date=getDateCurrent();//dia actual
  const monday=getLastMonday();//lunes

  const comerceId = useSelector((state) => state.user_internal.comerceId);

  useEffect(() => {
/*     const fetchData = async () => {
      try {
        const response = await axios.get(
          `order/vtas/${comerceId}?dateFrom=${monday}&dateTo=${date}`
        );
        // Actualiza el estado con los datos obtenidos
        setWeek(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }; */

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `order/vtas/${comerceId}?dateFrom=${monday}&dateTo=${date}`
        );
        
        // Verifica si falta algún día en la respuesta y agrégalo con pedidos y tot_diario en cero.
        const updatedWeek = [];
        const startDate = new Date(monday);
        const currentDate = new Date(date);
        for (let d = new Date(startDate); d <= currentDate; d.setDate(d.getDate() + 1)) {
          const isoDate = d.toISOString().slice(0, 10);
          const dayData = response.data.find(item => item.date === isoDate);
          if (dayData) {
            updatedWeek.push(dayData);
          } else {
            updatedWeek.push({
              date: isoDate,
              tot_diario: 0,
              pedidos: 0,
            });
          }
        }
        
        // Actualiza el estado con los datos obtenidos, incluyendo el día 4.
        setWeek(updatedWeek);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
  
    fetchData(); // Llama a la función fetchData
  }, []); // Asegúrate de pasar un arreglo vacío como segundo argumento para que se ejecute solo una vez
  //console.log(week)

  const totalWeek=week&&week.reduce((acc,cur)=>acc+ cur.tot_diario,0);//total dinero de la semana
  const totalWeekOrders=week&&week.reduce((acc,cur)=>acc+ cur.pedidos,0);//total ordenes vendidas de la semana
  const totalOrToday=week&&week.map(cur=>cur.tot_diario);//dinero ganado por dia
  const today_orders_money=week&&week.find(cur=>cur.date===date);// pedidos y ventas de hoy

  return (
    <div className={s.containerd}>
      <div className={s.content_1}>
        <span>Esta semana</span>
        <br />
        <span>
        Total semanal:$
          <b style={{ fontWeight: "700" }}>{totalWeek&&Math.floor(totalWeek)} </b>
        </span>
        <div className={s.grafico}>
          <SalesChart week={totalOrToday&&totalOrToday} />
        </div>
      </div>
      <div className={s.content_2}>
        <span>Hoy</span>
        <div>
          <div className={s.orders}>
            <span>{`hoy vendiste $${week&&today_orders_money.tot_diario}`} </span>
          </div>
          <div className={s.sales}>
            <span>
            hoy recibiste {week&&today_orders_money.pedidos}{" "}
            pedidos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

export function SalesChart({ week }) {
  //const newWeek=week&&week.map(cur=> roundToTwoDecimalPlaces(cur))
  const newWeek=week&&week.map(cur=> Math.floor(cur))

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
      data: newWeek
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
