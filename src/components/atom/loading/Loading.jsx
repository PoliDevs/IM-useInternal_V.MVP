import s from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={s.loader_container}>
      <div className={s.loader}></div>
    </div>
  );
}
