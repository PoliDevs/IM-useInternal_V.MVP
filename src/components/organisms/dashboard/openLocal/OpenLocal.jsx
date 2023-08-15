import s from './openLocal.module.scss';
import Header from '../../../molecules/Header/Header';

export default function OpenLocal() {
  return <div className={s.container_open}>
    <Header icon="newspaper outline" title="Pedidos recibidos" detail="Tus pedidos estan aqui por orden de ingreso" />
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
