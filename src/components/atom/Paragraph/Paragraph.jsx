import s from './Paragraph.module.scss';

export default function Paragraph({text,disabled,left,start, secundary, bold,noMargin,color,marginLeft}) {
  return (
    <p
      className={`${s.paragraph} ${disabled && s.disabled} ${start && s.start} ${left && s.left} ${secundary && s.secundary} ${noMargin && s.no_margin} ${
        bold && s.bold
      }`}
      style={{color,marginLeft}}
    >
      {text}
    </p>
  );
}
