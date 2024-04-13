import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Input, validationSchema } from "./Config";
import { useTranslation } from "react-i18next";
import "./Login.css";
import { yupResolver } from "@hookform/resolvers/yup";
type Props = {};

const Login: React.FC = ({}: Props) => {
  const methods = useForm<Input>({
    resolver : yupResolver(validationSchema)
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  const { t } = useTranslation();
  const submitHandler = (formData: Input) => {console.log({formData})};
  console.log(errors)
  return (
    <>
      <div className="form-signup">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Controller
              name="mobileNumber"
              control={control}
              render={({ field: { name }, ...rest }) => (
                <>
                  <div className="form-field-label">
                    {t("features.login.form.mobileNumber.label")}
                  </div>
                  <input
                    {...rest}
                    name={name}
                    className="form-field-input"
                    type="text"
                  />
                  {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
                </>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { name }, ...rest }) => (
                <>
                  <div className="form-field-label">
                    {t("features.login.form.password.label")}
                  </div>
                  <input
                    {...rest}
                    name={name}
                    className="form-field-input"
                    type="password"
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                </>
              )}
            />
            <div className="form-fields">
              <button className="form-field-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Login;
