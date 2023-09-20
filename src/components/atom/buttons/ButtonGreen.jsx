import { Button } from "semantic-ui-react";

export default function ButtonGreen({ text, active,onClick }) {
  return active ? (
    <Button
      style={{
        background: "#00A877",
        borderRadius: "20px",
        border: "solid 2px #000",
        color: "#fff",
        fontSize: "14px",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  ) : (
    <Button
      style={{
        background: "#D9D9D9",
        borderRadius: "20px",
        color: "#fff",
        fontSize: "14px",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
