import { useState, useEffect } from "react";
import GoogleButton from "../../atom/GoogleButton/GoogleButton";
import s from "./singn_in.module.scss";
import Title from "../../atom/Title/Title";
import LineText from "../../atom/LineText/LineText";
import useFirebase from "../../../firebase/firebase.config";
import { useTranslation } from "react-i18next";
import { Select } from "semantic-ui-react";
import { selectLanguage } from "../../../redux/actions";
import { useSelector,useDispatch } from "react-redux";

export default function Sing_in() {
  const [error, setError] = useState(false);
  const dispatch=useDispatch();
  const language = useSelector((state) => state.language);
  console.log(language)

  const [t, i18n] = useTranslation("global");
  const { signInWithGoogle } = useFirebase(setError);
  useEffect(() => {
    // Borra el localStorage al cargar el componente
    localStorage.clear();
  }, []);

  const optionLan = [
    { key: "es", value: "es", text: "Español" },
    { key: "en", value: "en", text: "English" },
    { key: "pt", value: "pt", text: "Português" },
    { key: "pt_bra", value: "pt_bra", text: "Português_Brazil" },
    { key: "it", value: "it", text: "Italiano" },
    { key: "fr", value: "fr", text: "Francés" },
  ];

  const handleLanguage = (e, { value }) => {
    /*     const {value}=e.target; */
/*     dispatch(selectLanguage(value));
    i18n.changeLanguage(value); */
    dispatch(selectLanguage(value)); // Despacha la acción para actualizar el idioma
    i18n.changeLanguage(value);
  };

  return (
    <main className={s.mainContainer}>
      <>
        <div className={s.loginContainer}>
          <Select
            options={optionLan}
            placeholder={t("singn in.select a language")}
            onChange={handleLanguage}
          />
          <div className={s.logo}></div>
          {/*            <select onChange={handleLanguage} >
            <option  value="es">es</option>
            <option  value="en">en</option>
            <option  value="pt">pt</option>
           </select> */}
          <Title text={t("singn in.take the first step")} />
          <LineText text={t("singn in.login using your Google email")} />
          <GoogleButton
            text={t("singn in.login with Google")}
            signInWithGoogle={signInWithGoogle}
          />
        </div>
        <section className={s.sloganContainer}>
          <div className={s.content_2}>
            <h2 className={s.bigText_1}>{t("singn in.speed is")}</h2>
            <h2 className={s.bigText}>
              {t("singn in.our plate")}
              <br />
              {t("singn in.strong")}
            </h2>
          </div>
        </section>
      </>
    </main>
  );
}
