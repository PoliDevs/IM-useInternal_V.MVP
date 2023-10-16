import s from "./FormError.module.scss";

export default function FormError({error, text}) {
  return <p className={`${s.error} ${error && s.visible}`}>{text}</p>;
}
