import { useState } from "react";
import s from "./card.module.scss";
import { Icon,Button } from "semantic-ui-react";


export default function Card({ status, id, numberOrder, date, menu, total }) {
  const [seeOrder,setSeeOrder]=useState(true);
  const handleSeeOrder=()=>{
    setSeeOrder(!seeOrder);
  };

  const getStatus=(arg)=>{
    if(arg==="new"){return "Pasar a preparando"};
    if(arg==="preparing"){return "Pasar a listo"};
    if(arg==="ready"){return "Pasar a entregado"};
  };

  const colorButton=(arg)=>{
    if(arg==="new"){return "#FF4A4A"}
    if(arg==="preparing"){return "#40CB5F"}
    if(arg==="ready"){return "#000000"}
  }

  //cambiamos el status del pedido
  const handleStatus=(value)=>{
    if(value==="new")return "preparing";
    if(value==="preparing")return "ready";
  }

  return (
    <div className={s.content_card} >
      <div>
        <h4>Mesa {id} <Icon name={seeOrder?"angle right":"angle down"} onClick={handleSeeOrder}/></h4>
        {seeOrder?
        <div>
        {/* <span>{status}</span> */}
        <span>
          Pedido N {numberOrder} -Recibido a las {date}
        </span>
        {menu.map((cur) => {
          return (
            <article key={cur.id}>
              <span>
                {cur.amount} {cur.product}
              </span>
              <span>${cur.price}</span>
            </article>
          );
        })}
        <div>
        <span className={s.total_price}>Total:${total} </span>
        <Button style={{background:colorButton(status),padding:"3px",color:"white",margin:"0 0 5px 0"}} >{getStatus(status)}</Button>
        </div>
        </div>
        :null}
      </div>
    </div>
  );
}
