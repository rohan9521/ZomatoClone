import React from "react";
import "./SignUp.css";
import { useSignUp } from "../../hooks/useSignUp";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Inputs, validationSchema } from "./Config";
import { useTranslation } from "react-i18next";

import { yupResolver } from "@hookform/resolvers/yup";
type Props = {};

const SignUp = (props: Props) => {
  const { t } = useTranslation();
  const methods = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = methods;
  const { mutate: addUser } = useSignUp();
  const onSubmit = async (data: Inputs) => {
    await addUser(data);
  };
  return (
    <>
      <div className="form-signup">
        <div className="media-area">
          <h1>Sign Up</h1>
          <p>{t("features.signup.header.label")}</p>
        </div>
        <div className="form-area">
          <FormProvider {...methods}>
            <form className="card" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-fields">
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { name, ...rest } }) => (
                    <>
                      <div className="form-field-label">
                        {t("features.signup.form.name.label")}
                      </div>
                      <input
                        {...rest}
                        name={name}
                        className="form-field-input"
                        type="text"
                      />
                    </>
                  )}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="form-fields">
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { name, ...rest } }) => (
                    <>
                      <div className="form-field-label">
                        {t("features.signup.form.email.label")}
                      </div>
                      <input
                        name={name}
                        className="form-field-input"
                        type="text"
                        {...rest}
                      />
                      {errors.email && <p>{errors.email.message}</p>}
                    </>
                  )}
                />
              </div>
              <div className="form-fields">
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { name, ...rest } }) => (
                    <>
                      <div className="form-field-label">
                        {t("features.signup.form.password.label")}
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
              </div>
              <div className="form-fields">
                <Controller
                  control={control}
                  name="mobileNumber"
                  render={({ field: { name, ...rest } }) => (
                    <>
                      <div className="form-field-label">
                        {t("features.signup.form.mobileNumber.label")}
                      </div>
                      <input
                        {...rest}
                        name={name}
                        className="form-field-input"
                        type="number"
                      />
                      {errors.mobileNumber && (
                        <p>{errors.mobileNumber.message}</p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="form-fields">
                <button className="form-field-button" type="submit">
                  Submit
                </button>
              </div>
              {/* <div className="form-fields">
            <div className="form-field-label">State</div>
            <input
              className="form-field-input"
              type="text"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <div className="form-field-label">CountryCode</div>
            <input
              className="form-field-input"
              type="text"
              value={countryCode}
              onChange={(e) => {
                setCountryCode(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <div className="form-field-label">Locality</div>
            <input
              className="form-field-input"
              type="text"
              value={locality}
              onChange={(e) => {
                setLocality(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <div className="form-field-label">PinCode</div>
            <input
              className="form-field-input"
              type="text"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <div className="form-field-label">Area</div>
            <input
              className="form-field-input"
              type="text"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
            />
          </div>
         
          <div className="form-fields">
            <div className="form-field-label">House Number</div>
            <input
              className="form-field-input"
              type="text"
              value={houseNumber}
              onChange={(e) => {
                setHouseNumber(e.target.value);
              }}
            />
          </div>
          <div className="form-fields">
            <div className="form-field-label">LandMark</div>
            <input
              type="text"
              className="form-field-input"
              value={landMark}
              onChange={(e) => {
                setLandMark(e.target.value);
              }}
            />
          </div> */}
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default SignUp;
