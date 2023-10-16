import s from './Paragraph.module.scss';

export default function Paragraph({text, left,start, secundary, bold,noMargin}) {
  return (
    <p
      className={`${s.paragraph} ${start && s.start} ${left && s.left} ${secundary && s.secundary} ${noMargin && s.no_margin} ${
        bold && s.bold
      }`}
    >
      {text}
    </p>
  );
}
