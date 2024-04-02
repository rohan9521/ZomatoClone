import React, { useState } from "react";
import "./SignUp.css";
type Props = {};

const SignUp = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");
  const [landMark, setLandMark] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>();
  const [mobileNumber, setMobileNumber] = useState<string>("");

  return (
    <>
      <div className="form-signup">
        <div className="media-area">
          <h1>Sign Up</h1>
        </div>
        <div className="form-area">
          <form className="card">
            <div className="form-fields">
              <div className="form-field-label">Name</div>
              <input
                className="form-field-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-fields">
              <div className="form-field-label">Email</div>
              <input
                className="form-field-input"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-fields">
              <div className="form-field-label">Password</div>
              <input
                className="form-field-input"
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="form-fields">
              <div className="form-field-label">Mobile Number</div>
              <input
                className="form-field-input"
                type="text"
                value={mobileNumber}
                onChange={(e) => {
                  setMobileNumber(e.target.value);
                }}
              />
            </div>

            <div className="form-fields">
              <button className="form-field-button">Submit</button>
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
