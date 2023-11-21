import s from "./labelInput.module.scss";

export default function LabelInput({ text, type,name }) {
  const handleInput = (e) => {
    // Si el tipo es "number", eliminar caracteres no numéricos
    if (type === "number") {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
  };
  return (
    <>
      {type === "number" ? (
        <>
          <label htmlFor={name} >{text}</label>
          <input id={name} name={name} type="text" onInput={handleInput}/>
        </>
      ) : (
        <>
          <label htmlFor={name}>{text}</label>
          <input type={type} id={name} name={name} />
        </>
      )}
    </>
  );
}
