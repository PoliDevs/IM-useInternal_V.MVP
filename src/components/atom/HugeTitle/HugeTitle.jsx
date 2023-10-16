import s from "./HugeTitle.module.scss";

export default function HugeTitle({ text, icon,fontSize }) {
  return (
    <h1 className={s.hugeTitle} style={{fontSize}}>
      {icon ? icon : null}
      {text}
    </h1>
  );
}
