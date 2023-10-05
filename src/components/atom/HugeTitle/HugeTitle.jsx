import s from "./HugeTitle.module.scss";

export default function HugeTitle({ text, icon }) {
  return (
    <h1 className={s.hugeTitle}>
      {icon ? icon : null}
      {text}
    </h1>
  );
}
