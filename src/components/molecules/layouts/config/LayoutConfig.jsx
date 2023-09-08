import React from 'react';
import Loading from '../../../atom/loading/Loading';
import s from './layoutConfig.module.scss';
import { Button,Icon } from 'semantic-ui-react';

export default function LayoutConfig() {
  return (
    <div className={s.containerd}>
       {/*  <Loading/> */}
       <section>
        <Button secondary style={{borderRadius:0}}>Datos personales <Icon size='large' name="long arrow alternate right" /> </Button>
        <Button secondary style={{borderRadius:0}} >Datos de negocio</Button>
        <Button secondary style={{borderRadius:0}} >Mercado pago</Button>
       </section>
       <section>
        <input type="text" />
       </section>
    </div>
  )
}
