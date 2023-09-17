import Title from '../Title/Title';
import s from './Open_Close.module.scss';

export default function Open_Close() {
  return (
    <div className={s.open_close}>
      <div style={{width: "200px", margin: "0 auto"}}>
      <Title text={`Abre y cierra tu local a demanda`}/>
      </div>
      <div className={s.open_closeImage}></div>
    </div>
  )
}
