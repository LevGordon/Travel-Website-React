import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUpForm.css"

function SignUpForm() {
  const navigate = useNavigate();

  const initialFormState = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    email: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const [passwordsMatch, setPasswordsMatch] = useState(true)


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formData", formData);
  };

  const handleCancel = () => {
    setFormData({ ...initialFormState });
    navigate(-1);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const passwordMatchValidator = (event) => {
    event.preventDefault()
    if(formData.password_repeat === formData.password) {
        setPasswordsMatch(true)
        handleSubmit(event)
    } else {
        setPasswordsMatch(false)
    }
  }

  const formElement = (
    <form className="form" onSubmit={passwordMatchValidator}>
      <div className="signup-labelinput-block">
        <label>First name:</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleInputChange}
          value={formData.first_name || ""}
          required
          className="signup-input"
        />
      </div>
      <div className="signup-labelinput-block">
        <label>Last name:</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          onChange={handleInputChange}
          value={formData.last_name || ""}
          required
          className="signup-input"
        />
      </div>
      <div className="signup-labelinput-block">
        <label>Mobile number:</label>
        <input
          type="text"
          name="mobile_number"
          id="mobile_number"
          placeholder="xxx-xxx-xxxx"
          onChange={handleInputChange}
          value={formData.mobile_number || ""}
          required
          className="signup-input"
        />
      </div>
      <div className="signup-labelinput-block">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={formData.email || ""}
          required
          className="signup-input"
        />
      </div>
      <div className="signup-labelinput-block">
        <label>Select a password:</label>
        <input
          type="password"
          name="password"
          id="pasword"
          onChange={handleInputChange}
          value={formData.password || ""}
          required
          className="signup-input"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number, one uppercase, one lowercase letter and at least 8 characters"
        />
      </div>
      <div className="signup-labelinput-block">
        <label>Repeat your password:</label>
        <input
          type="password"
          name="password_repeat"
          id="password_repeat"
          onChange={handleInputChange}
          value={formData.password_repeat || ""}
          required
          className="signup-input"
        />
      </div>
      <div className="signup-password-validation">
        {passwordsMatch ? <></> : <h4 style={{color: "red", fontSize: "19px"}}>passwords need to match</h4>}
      </div>
      <div className="signup-button-block">
        <button type="button" className="signup-button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="signup-button"> Sign Up </button>
      </div>
    </form>
  );

  return (
    <div className="SignUpForm">
      <h3 className="signup-h3-preform">SIGN UP TO TRVL</h3>
      <div className="signup-form-block">
        <div className="signup-password-requirements">
        <h5 className="signup-password-requirements-h5">Password requirements:</h5>
        <ul>
          <li>Longer than 8 characters</li>
          <li>Must contain at least 1 uppercase and 1 lowercase character</li>
          <li>Must contain at least 1 number</li>
          <li>Must contain at least 1 special character (""$#/\:;) </li>
        </ul>
        </div>
        {formElement}
        </div>
    </div>
  );
}

export default SignUpForm;
