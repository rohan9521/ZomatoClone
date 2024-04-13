import i18next from "i18next";
import * as yup from "yup";
export interface Input {
  mobileNumber: string;
  password: string;
}

export const validationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .nullable()
    .length(
      10,
      i18next.t("features.login.form.mobileNumber.error.validation.message")
    )
    .required(
      i18next.t("features.login.form.mobileNumber.error.required.message")
    ),
  password: yup
    .string()
    .nullable()
    .min(8, i18next.t("features.login.form.password.error.validation.message"))
    .max(20, i18next.t("features.login.form.password.error.validation.message"))
    .required(i18next.t("features.login.form.password.error.required.message")),
});
