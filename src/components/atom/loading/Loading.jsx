import s from "./loading.module.scss";

export default function Loading({ center,bold }) {
  return (
    <div className={`${s.loader_container} ${center && s.center} ${bold && s.bold}`}>
      <div className={`${s.loader} ${bold && s.bold}`}></div>
    </div>
  );
}
