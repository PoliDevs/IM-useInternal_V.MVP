import { ArrowsUpDown } from "../../iconsHerocoins/icons";
import { Button } from "semantic-ui-react";
import { useRef } from 'react';

export default function InputButton({
  text,
  icon,
  width,
  height,
  color,
  justifyContent,
  alignItems,
  background,
  fontZise,
  gap,
  onClick,
  input,
  onChange,
}) {
  const icons = {
    arrowsUpDown: <ArrowsUpDown height="24" />,
  };
  const colorFont = {
    white: "#FFFFFF",
    black: "#212121",
    disabled: "#545454",
  };

  const backgroundButton = {
    white: "#FFFFFF",
    black: "#212121",
    disabled: "#545454",
  };

  const inputRef = useRef(null);

const handleButtonClick = () => {
    // Hace clic en el input de tipo file al hacer clic en el botón
    if (inputRef.current) {
      inputRef.current.click();
    }

    // Llama a la función de clic del botón si se proporciona
    if (onClick) {
      onClick();
    }
  };

  return (
    <div style={{ display: "inline-block" }}>
    <Button
      primary
      onClick={input?handleButtonClick:onClick}
      style={{
        background: backgroundButton[background] || "#FFFFFF",
        color: colorFont[color] || "#212121",
        fontSize: fontZise || "18px",
        display: "flex",
        width: width || "100%",
        height,
        justifyContent,
        alignItems,
        gap: gap || "10px",
        fontWeight: "bold",
      }}
    >
      {input && (
        <input type="file" style={{ display: "none" }} 
        ref={inputRef}
        onChange={onChange}
         />
      )}
      {text}
      {icon && icons[icon]}{" "}
    </Button>
    </div>
    
  );
}
