import i18next from 'i18next';
import * as yup from 'yup';
export interface Input {
  mobileNumber: string;
  password: string;
}

export const validationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .nullable()
    .required(
      i18next.t('features.login.form.mobileNumber.error.required.message')
    )
    .length(
      10,
      i18next.t('features.login.form.mobileNumber.error.validation.message')
    ),
  password: yup
    .string()
    .nullable()
    .required(i18next.t('features.login.form.password.error.required.message'))
    .min(8, i18next.t('features.login.form.password.error.validation.message'))
    .max(
      20,
      i18next.t('features.login.form.password.error.validation.message')
    ),
});
