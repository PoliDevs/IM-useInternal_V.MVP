import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { loginSchema } from "../../../utils/yup";
import s from "./Login.module.scss";

export default function Login() {
  const [t, i18n] = useTranslation(["global"]);
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const { errors, isDirty, isSubmitting } = formState;

  const onSubmit = async (data, event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={s.mainContainer}
    >
      {/* <Logo className={s.logo} /> */}
      <div className={s.logo}></div>
      <div className={s.formContainer}>
        <button className={s.googleButton}>
          <FcGoogle className={s.fcGoogle} />
          {t("internal.auth.googleAcces")}
        </button>
        <p className={s.or}>{t("internal.auth.or")}</p>
        <form
          className={s.loginForm}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <label className={s.label} htmlFor="email">
            {t("internal.auth.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="burgerstore@gmail.com"
            className={s.input}
            {...register("email")}
          />
          <p className={`${s.error} ${errors.email && s.visible}`}>
            Ingrese un email valido
          </p>
          <label className={s.label} htmlFor="loginPassword">
            {t("internal.auth.password")}
          </label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            placeholder="********"
            className={s.input}
            {...register("password")}
          />
          <p className={`${s.error} ${errors.password && s.visible}`}>
            la contraseña debe tener entre 4 y 8 caracteres
          </p>
          <button
            className={s.sesionButton}
            type="submit"
            disabled={!isDirty || isSubmitting}
          >
            {t("internal.auth.login")}
          </button>
          <Link className={s.link}>{t("internal.auth.forgot")}</Link>
          <hr className={s.hr} />
          <Link className={s.link} to="/register">
            {t("internal.auth.register")}
          </Link>
        </form>
      </div>
    </div>
  );
}
