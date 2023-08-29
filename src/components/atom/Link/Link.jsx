import React from "react";
import s from "./link.module.scss";

export default function Link({ content, number, color }) {
  return (
    <h3
      style={{
        color: color,
        marginBottom:"10px"
      }}
    >
      {content}
      <span className={s.elevatedNumber} style={{background:color}} >{number}</span>
    </h3>
  );
}
