import React, { useState } from "react";
import s from "./labelInput.module.scss";

export default function LabelInput({ text, type, name, value, onChange }) {
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleInput = (e) => {
    // Si el tipo es "number", eliminar caracteres no numéricos
    if (type === "number") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
    onChange(e); // Asegúrate de que el evento se propaga
  };

  const handleFocus = () => {
    setIsPlaceholderVisible(false);
  };

  const handleBlur = () => {
    setIsPlaceholderVisible(true);
  };

  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        id={name}
        name={name}
        type={type === "number" ? "text" : type}
        value={value}
        onInput={handleInput}
        onChange={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isPlaceholderVisible ? " ●●●●●●●●●●●●●●●●●●●●●●●●●●" : ""}
      />
    </>
  );
}
