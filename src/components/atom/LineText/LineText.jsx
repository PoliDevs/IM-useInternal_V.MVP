import s from './LineText.module.scss';

export default function LineText({text, disabled, centered, secundary, bold,wordWrap,end, priceCard, productName,}) {
  return (
    <pre
      className={`${s.lineText} ${disabled && s.disabled} ${
        centered && s.centered
      } ${secundary && s.secundary} ${bold && s.bold} ${wordWrap && s.wordWrap} ${end && s.end} ${priceCard && s.priceCard} ${productName && s.productName}`}
    >
      {text}
    </pre>
  );
}
