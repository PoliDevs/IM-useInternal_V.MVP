// import React, { useState, useRef } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Button, Icon } from "semantic-ui-react";

// export default function DatePickerComponent() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   /* console.log(selectedDate) */
//   const datepickerRef = useRef(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const resetDate = () => {
//     setSelectedDate(null);
//   };

//   const CustomDatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
//     <div>
//       <Button secondary onClick={onClick} ref={ref}>
//         {value ? `Hasta ${value}` : "Seleccione una fecha"}
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
//     <DatePicker
//       selected={selectedDate}
//       onChange={handleDateChange}
//       dateFormat="dd/MM/yyyy"
//       customInput={<CustomDatePickerInput />}
//       ref={datepickerRef}
//     />
//   );
// }

import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Icon } from "semantic-ui-react";

export default function DatePickerComponent({ selectedDate, onDateChange }) {
  const datepickerRef = useRef(null);

  const handleDateChange = (date) => {
    onDateChange(date); // Llama a la función proporcionada desde LayoutHistory
  };

  const resetDate = () => {
    onDateChange(null); // Establece la fecha seleccionada como nula
  };

  const CustomDatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
    <div>
      <Button secondary onClick={onClick} ref={ref} style={{padding:"5px"}}>
        {value ? `Hasta ${value}` : "Seleccione una fecha"}
        {value && (
          <Icon
            name="close"
            style={{ marginLeft: "5px", cursor: "pointer" }}
            onClick={resetDate}
          />
        )}
      </Button>
    </div>
  ));

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      customInput={<CustomDatePickerInput />}
      ref={datepickerRef}
    />
  );
}

