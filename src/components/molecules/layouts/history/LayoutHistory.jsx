// import React, { useState, useEffect, useRef } from "react";
// import Loading from "../../../atom/loading/Loading";
// import s from './layoutHistory.module.scss';
// import { useTranslation } from 'react-i18next';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Button, Icon } from "semantic-ui-react";

// export default function LayoutHistory() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const { t, i18n } = useTranslation();
//   const datepickerRef = useRef(null); // Referencia al componente DatePicker

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//     return () => clearTimeout(timeout);
//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   //reset statedata
//   const resetDate = () => {
//     setSelectedDate(null);
//   };

//   //
//   const CustomDatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
//     <div>
//       <Button secondary onClick={onClick} ref={ref}>
//         {console.log(onClick)}
//         {value ? `Hasta ${value}` : "Selecione una fecha"}
//         {value && (
//           <Icon
//             name="close"
//             style={{ marginLeft: "5px", cursor: "pointer" }}
//             onClick={resetDate}
//           />
//         )}
//       </Button>
//     </div>
//   ));
//   return (
//     <div className={s.containerd}>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <>
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleDateChange}
//             dateFormat="dd/MM/yyyy"
//             customInput={<CustomDatePickerInput />}
//             ref={datepickerRef}
//           />
//         </>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Loading from "../../../atom/loading/Loading";
import s from "./layoutHistory.module.scss";
import { useTranslation } from "react-i18next";
import DatePickerComponent from "../../calendar/DatePickerComponent";
import Card from "../../card/Card.jsx";

export default function LayoutHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  // actualizar la fecha seleccionada
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={s.containerd}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DatePickerComponent
            selectedDate={selectedDate} // Pasa la fecha seleccionada como prop
            onDateChange={handleDateChange} // Pasa la función para actualizar la fecha seleccionada
          />
          <div>
            {selectedDate ? (
              <div className={s.content_date}>
                <span className={s.date}>
                  {selectedDate.toLocaleDateString(i18n.language, {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </span>
                {menu.map((cur, idx) => {
                  <Card
                    key={idx}
                    status={cur.status}
                    id="123"
                    numberOrder="123"
                    hour="123"
                    cost={1123}
                    total={123}
                    menu={cur.menu}
                    width={"23%"}
                  />
                })}
              </div>
            ) : (
              <div className={s.content_date}>
                <span className={s.date}>Hoy</span>
                <div>
                  {menu.map((cur, idx) => {
                    return (
                      <Card
                        key={idx}
                        status={cur.status}
                        id="123"
                        numberOrder="123"
                        hour="123"
                        cost={1123}
                        total={123}
                        menu={cur.menu}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const menu = [
  {
    numberOrder: 1,
    table: 1,
    hours: "23:54",
    menu: [
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
    ],
    detail:"",
    total: 2345,
    status: "delivered",
  },

  {
    numberOrder: 1,
    table: 1,
    hours: "23:54",
    menu: [
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
    ],
    total: 2345,
    status: "delivered",
  },
  {
    numberOrder: 1,
    table: 1,
    hours: "23:54",
    menu: [
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
    ],
    total: 2345,
    status: "delivered",
  },
  {
    numberOrder: 1,
    table: 1,
    hours: "23:54",
    menu: [
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
      { name: "sprite", amount: 1, cost: 234 },
    ],
    total: 2345,
    status: "delivered",
  }
];
