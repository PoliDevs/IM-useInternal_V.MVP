import * as yup from "yup";
import isEmailValidator from "validator/lib/isEmail";

//* Schema de validacion para formulario de LogIn *//
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .test(
      "is-valid",
      (message) => `${message.path} is invalid`,
      (value) =>
        value
          ? isEmailValidator(value)
          : new yup.ValidationError("Invalid value")
    ),
  password: yup.string().min(4).max(8).required(),
});