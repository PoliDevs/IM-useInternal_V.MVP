import { useState } from "react";
import GoogleButton from '../../atom/GoogleButton/GoogleButton'
import s from "./singn_in.module.scss";
import Title from "../../atom/Title/Title";
import LineText from '../../atom/LineText/LineText';
import useFirebase from "../../../firebase/firebase.config";

export default function Sing_in() {
  const [error, setError] = useState(false);
  const { signInWithGoogle } = useFirebase(setError);
  return (
    <main className={s.mainContainer}>
      {!error ? (
        <>
          <aside className={s.loginContainer}>
            <Title text={"Da el primer paso"} />
            <LineText  text={"Ingresa utilizando tu correo de google"} />
            <GoogleButton text={"Accede con google"} signInWithGoogle={signInWithGoogle} />
          </aside>
          <section className={s.sloganContainer}>
            <h2 className={s.bigText_1}>La velocidad es</h2>
            <h2 className={s.bigText}> nuestro plato fuerte</h2>
          </section>
        </>
      ) : (
        <>
          <aside className={s.loginContainer}>
            <Title text={"Da el primer paso"} />
            <LineText  text={"Ingresa utilizando tu correo de google"} />
            <GoogleButton text={"Accede con google"} signInWithGoogle={signInWithGoogle} />
          </aside>
          <section className={s.sloganContainer}>
            <h2 className={s.bigText_1}>La velocidad es</h2>
            <h2 className={s.bigText}> nuestro plato fuerte</h2>
          </section>
        </>
      ) 
      /*null <Error active={error} /> */}
    </main>
  );
}
