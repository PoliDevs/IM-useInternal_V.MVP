import s from './openLocal.module.scss';
import { Icon } from 'semantic-ui-react';

export default function OpenLocal() {
  return <div className={s.container_open}>
    <header>
      <h1> <Icon name="newspaper outline" />  Pedidos recibidos</h1>
      <span>Tus pedidos estan aqui por orden de ingreso</span>
    </header>
    <section className={s.centered_content}>
      <div>
        <h2>Nuevos</h2>
        <div>content</div>
        </div>
      <div>
        <h2>Preparando</h2>
        <div>content</div>
        </div>
      <div>
        <h2>Listo</h2>
        <div>content</div>
      </div>
    </section>
  </div>
}
