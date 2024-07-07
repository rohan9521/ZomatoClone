import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Input, validationSchema } from "./Config";
import { useTranslation } from "react-i18next";
import "./Login.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../hooks/useLogin";
import {DevTool} from "@hookform/devtools";

type Props = {};

const Login: React.FC = ({}: Props) => {
  const methods = useForm<Input>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      mobileNumber: "",
      password: "",
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [enableLoginQuery,setEnableLoginQuery] = useState(false);
  const { data } = useLogin(methods.getValues(), {
    enabled: enableLoginQuery,
    onSettled: (data) => {
      setEnableLoginQuery(false)
    },
  });
  const { t } = useTranslation();
  const submitHandler = (formData: Input) => {
    console.log(methods.getValues());
     setEnableLoginQuery(true);
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <div className="form-signup">
        <div className="media-area">
          <h1>{t("features.login.header.label")}</h1>
        </div>
        <div className="form-area">
          <FormProvider {...methods}>
            <form className="card" onSubmit={handleSubmit(submitHandler)}>
              <Controller
                name="mobileNumber"
                control={control}
                render={({ field: { name, onChange, ...rest } }) => (
                  <>
                    <div className="form-field-label">
                      {t("features.login.form.mobileNumber.label")}
                    </div>
                    <input
                      {...rest}
                      name={name}
                      onChange={onChange}
                      className="form-field-input"
                      type="number"
                    />
                    {errors.mobileNumber && (
                      <p>{errors.mobileNumber.message}</p>
                    )}
                  </>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field: { name, ...rest } }) => (
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
          <DevTool  control={control}/>
        </div>
      </div>
    </>
  );
};

export default Login;
