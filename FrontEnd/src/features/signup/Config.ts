import i18next from 'i18next';
import * as yup from "yup";

export interface Inputs {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
}

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .nullable()
    .required(i18next.t("features.signup.form.name.error.required.message")),
  email: yup
    .string()
    .nullable()
    .required(i18next.t("features.signup.form.email.error.required.message")),
  password: yup
    .string()
    .nullable()
    .required(i18next.t("features.signup.form.password.error.required.message"))
    .min(
      8,
      i18next.t("features.signup.form.password.error.validation.message")
    )
    .max(
      20,
      i18next.t("features.signup.form.password.error.validation.message")
    ),
  mobileNumber: yup
    .string()
    .nullable()
    .required(
      i18next.t("features.signup.form.mobileNumber.error.required.message")
    )
    .length(
      10,
      i18next.t("features.signup.form.mobileNumber.error.validation.message")
    ),
});
