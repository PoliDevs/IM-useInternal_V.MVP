import { Icon } from 'semantic-ui-react';
import s from './openLocal.module.scss';
import {Container} from 'semantic-ui-react';

export default function OpenLocal({open}) {
    const open_close=open;
  return <div className={s.container_open}>
    <Container className={s.centered_content}>
      <Icon name="warehouse" size='big'/>
      <h2>Local cerrado</h2>
      <span>Abre el local para comenzar </span>
      <br />
      <span>a recibir pedidos</span>
    </Container>
  </div>
}
