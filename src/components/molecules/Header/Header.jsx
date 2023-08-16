import React from "react";
import { Icon } from "semantic-ui-react";
import s from './header.module.scss';
import { TbArrowBackUp } from "react-icons/tb";

export default function Header({icon,title,detail}) {
  return (
    <header>
      <h1>
     <TbArrowBackUp className={s.TbArrowBackUp}/>
        <Icon name={icon} size="small" />{title}
      </h1>
      <span>{detail}</span>
    </header>
  );
}
