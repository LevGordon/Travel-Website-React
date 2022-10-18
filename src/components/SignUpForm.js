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

  const formElement = (
    <form className="form" onSubmit={handleSubmit}>
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
      <div className="signup-form-block">{formElement}</div>
    </div>
  );
}

export default SignUpForm;
