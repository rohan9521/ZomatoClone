import React from "react";
import "./SignUp.css";
import { useSignUp } from "../../hooks/useSignUp";
import { useFormik } from "formik";
import { UserData } from "../../types/userData";
import { useForm } from "react-hook-form";
type Props = {};

type Inputs={
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
}
const SignUp = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
  } = useForm<Inputs>()
  const { mutate: addUser } = useSignUp();
  const onSubmit = async (data:Inputs)=>{
    await addUser(data)
  }
  return (
    <>
      <div className="form-signup">
        <div className="media-area">
          <h1>Sign Up</h1>
        </div>
        <div className="form-area">
          <form className="card" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-fields">
              <div className="form-field-label">Name</div>
              <input
                className="form-field-input"
                id="name"
                type="text"
                {...register('name')}
              />
            </div>
            <div className="form-fields">
              <div className="form-field-label">Email</div>
              <input
                id="email"
                className="form-field-input"
                type="text"
                {...register('email')}
              />
            </div>
            <div className="form-fields">
              <div className="form-field-label">Password</div>
              <input
                id="password"
                className="form-field-input"
                type="text"
                {...register('password')}
              />
            </div>
            <div className="form-fields">
              <div className="form-field-label">Mobile Number</div>
              <input
                id="mobileNumber"
                className="form-field-input"
                type="text"
                {...register('mobileNumber')}
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
        </div>
      </div>
    </>
  );
};

export default SignUp;
