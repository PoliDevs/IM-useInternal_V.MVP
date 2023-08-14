
import s from "./FormInput.module.scss";
 export default function FormInput({ type, text, placeholder, id, name, register }) {
   return (
     <input
       className={s.input}
       type={type}
       placeholder={placeholder}
       id={id}
       name={name}
       {...register(name)}
     >
       {text}
     </input>
   );
 }
