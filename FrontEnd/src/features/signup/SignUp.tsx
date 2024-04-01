import React, { useState } from "react";
import './SignUp.css'
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
  const [profilePic, setProfilePic] = useState<boolean>();
  const [mobileNumber, setMobileNumber] = useState<string>("");

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form className="form-signup">
          <>
            <h2>Name</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </>
          <>
            <h2>Email</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </>
          <>
            <h2>Password</h2>
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </>
          <>
            <h2>State</h2>
            <input
              type="text"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </>
          <>
            <h2>CountryCode</h2>
            <input
              type="text"
              value={countryCode}
              onChange={(e) => {
                setCountryCode(e.target.value);
              }}
            />
          </>
          <>
            <h2>Locality</h2>
            <input
              type="text"
              value={locality}
              onChange={(e) => {
                setLocality(e.target.value);
              }}
            />
          </>
          <>
            <h2>PinCode</h2>
            <input
              type="text"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);
              }}
            />
          </>
          <>
            <h2>Area</h2>
            <input
              type="text"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
            />
          </>
          <>
            <h2>Mobile Number</h2>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
          </>
          <>
            <h2>House Number</h2>
            <input
              type="text"
              value={houseNumber}
              onChange={(e) => {
                setHouseNumber(e.target.value);
              }}
            />
          </>
          <>
            <h2>LandMark</h2>
            <input
              type="text"
              value={landMark}
              onChange={(e) => {
                setLandMark(e.target.value);
              }}
            />
          </>
        </form>
      </div>
    </>
  );
};

export default SignUp;
