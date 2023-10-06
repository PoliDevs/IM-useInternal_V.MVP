import { useState } from "react";
import GoogleButton from '../../atom/GoogleButton/GoogleButton'
import s from "./singn_in.module.scss";
import Title from "../../atom/Title/Title";
import LineText from '../../atom/LineText/LineText';
import useFirebase from "../../../firebase/firebase.config";
//import { ReactComponent as Logo } from "../../../assets/";

export default function Sing_in() {
  const [error, setError] = useState(false);
  const { signInWithGoogle } = useFirebase(setError);
  return (
    <main className={s.mainContainer}>
      {!error ? (
        <>
          <aside className={s.loginContainer}>
           {/*  <Logo/> */}
           <div className={s.logo} ></div>
            <Title text={"Da el primer paso:"} />
            <LineText  text={"Ingresa utilizando tu correo de google"} />
            <GoogleButton text={"Accede con google"} signInWithGoogle={signInWithGoogle} />
          </aside>
          <section className={s.sloganContainer}>
          <div className={s.content_2}>
            <h2 className={s.bigText_1}>La velocidad es</h2>
            <h2 className={s.bigText}> nuestro plato<br/> fuerte</h2>
            </div>
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
            <div className={s.content_2}>
            <h2 className={s.bigText_1}>La velocidad es</h2>
            <h2 className={s.bigText}> nuestro{`{\n}`}plato fuerte</h2>
            </div>
          </section>
        </>
      ) 
      /*null <Error active={error} /> */}
    </main>
  );
}
