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


import React, { useState, useEffect, useRef } from "react";
import Loading from "../../../atom/loading/Loading";
import s from './layoutHistory.module.scss';
import { useTranslation } from 'react-i18next';
import DatePickerComponent from "../../calendar/DatePickerComponent";

export default function LayoutHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={s.containerd}>
      {isLoading ? (
        <Loading />
      ) : (
        <DatePickerComponent />
      )}
    </div>
  );
}





// console.log(selectedDate
//     ? selectedDate.toLocaleDateString(i18n.language, {
//         day: "numeric",
//         month: "numeric",
//         year: "numeric",
//       })
//     : null)