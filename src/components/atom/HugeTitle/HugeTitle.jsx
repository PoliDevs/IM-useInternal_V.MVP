import s from "./HugeTitle.module.scss";

export default function HugeTitle({text, icon,fontSize,color,fontWeight,textAlign,padding}) {
  return (
    <h1 className={s.hugeTitle} style={{fontSize,color,fontWeight,textAlign,padding}}>
      {icon ? icon : null}
      {text}
    </h1>
  );
}
