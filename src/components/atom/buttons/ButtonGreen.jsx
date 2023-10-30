import { Button } from "semantic-ui-react";

export default function ButtonGreen({ text, active,onClick }) {

  return  (
    <Button
      style={{
        background: !active?"#D9D9D9":"#00A877",
        borderRadius: "20px",
        border: !active?"#00A877":"solid 2px #000",
        color: "#000",
        fontSize: "16px",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  ) 
}

