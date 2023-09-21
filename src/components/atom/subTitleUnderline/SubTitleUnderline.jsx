import React from "react";
import s from "./subTitleUnderline.module.scss";

export default function SubTitleUnderline({ content, number, color }) {
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
