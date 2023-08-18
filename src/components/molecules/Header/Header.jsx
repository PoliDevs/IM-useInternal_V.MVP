import React from "react";
import { Icon } from "semantic-ui-react";
import s from './header.module.scss';
import { TbArrowBackUp } from "react-icons/tb";

export default function Header({icon,title,detail}) {
  return (
    <header>
      <div>
     <TbArrowBackUp className={s.TbArrowBackUp}/>
      <h1>
        <Icon name={icon} size="small" style={{marginRight:"10px"}}/>{title}
      </h1>
      </div>
      <span>{detail}</span>
    </header>
  );
}
