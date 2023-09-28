import MenuStep from "../../../MenuStep/MenuStep";
import { Button } from "semantic-ui-react";

export default function LogoLocal() {
  return (
    <>
      <MenuStep
        text="LogoBStore.jpg"
        icon_1="ArrowDownload"
        className="menu_option"
        icon_2=""
        buttom={true}
      />
      <Button
        secondary
        size="big"
        style={{
          width: "80%",
          height: "60px",
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {" "}
        Reemplazar imagen
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{ height: "20px", width: "20px", color: "#000" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </Button>
    </>
  );
}
