import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "semantic-ui-react";
import { XMark } from "../../atom/iconsHerocoins/icons";
import { getDateCurrent } from "../../../utils/functions";

export default function DatePickerComponent({ selectedDate, onDateChange }) {
  const date=getDateCurrent();
  const datepickerRef = useRef(null);

  const handleDateChange = (date) => {
    onDateChange(date); // Llama a la función proporcionada desde LayoutHistory
  };

  const resetDate = () => {
    onDateChange(null); // Establece la fecha seleccionada como nula
    //onDateChange(date); // Establece la fecha seleccionada como nula

  };

  const CustomDatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
    <div>
      <Button secondary onClick={onClick} ref={ref} style={{padding:" 3px",fontSize:"18px",display:"flex",gap:"5px"}}>
        {value ? `Hasta ${value}` : "Seleccione una fecha"}
        {value && (
          <XMark
            onClick={resetDate}
            heigth={24}
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

