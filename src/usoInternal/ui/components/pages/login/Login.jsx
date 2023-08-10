import React from "react";
import { Button } from "semantic-ui-react";

export default function Login() {
  return (
    <div style={{ color: "red" }}>
      <h1>Login</h1>
      <div
        style={{
          width: "100%",
          background: "pink",
          textAlign:"center"
        }}
      >
        <br />
        <Button primary >Primary</Button>
        <br />
        <br />
        <Button secondary>Secundary</Button>
        <br />
        <br />
        <Button>comun</Button>
        <br />
        <br />
      </div>
    </div>
  );
}
