import s from './Paragraph.module.scss';

export default function Paragraph({text, left,start, secundary, bold}) {
  return (
    <p
      className={`${s.paragraph} ${start && s.start} ${left && s.left} ${secundary && s.secundary} ${
        bold && s.bold
      }`}
    >
      {text}
    </p>
  );
}
