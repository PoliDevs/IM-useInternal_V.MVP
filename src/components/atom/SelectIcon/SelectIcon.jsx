import s from "./SelectIcon.module.scss";

export default function SelectIcon({ icon }) {
  let emoji1 = icon;
  if (emoji1 !== "") {
    const unicodeArray = emoji1.split(" ");

    // const unicodeCodes = ["U+D83C", "U+DF70"];
    // Convierte los códigos Unicode al formato correcto (sin el "U+")
    const formattedCodes = unicodeArray.map((code) => code.replace("U+", ""));

    // Obtén el emoji a partir de los códigos Unicode formateados
    const emoji = String.fromCodePoint(
      parseInt(formattedCodes[0], 16),
      parseInt(formattedCodes[1], 16)
    );
    emoji1 = emoji;
  }
  return (
    <div className={s.emojiSelector}>
        <span role="img" aria-label="Emoji" className={s.icon}>
          {emoji1}
        </span>

    </div>
  );
}
