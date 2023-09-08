import s from './Paragraph.module.scss';

export default function Paragraph({text, left, secundary, bold}) {
  return (
    <p
      className={`${s.paragraph} ${left && s.left} ${secundary && s.secundary} ${
        bold && s.bold
      }`}
    >
      {text}
    </p>
  );
}
