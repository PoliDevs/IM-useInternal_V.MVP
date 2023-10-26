import s from "./subTitleUnderline.module.scss";

export default function SubTitleUnderline({ content, number, color,disable,status }) {
  return (
    <h3 className={s.textContainer} style={{ color: color }}>
      <a href={status} className={`${s.text} ${disable && s.disable}`} style={{ color: color }}>{content} </a>
{/*       <span href={status} className={`${s.text} ${disable && s.disable}`}>{content}</span> */}
      <span className={s.elevatedNumber} style={{ background: color }}>
        {number}
      </span>
    </h3>
  );
}
