import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../App.css";

function SignUp() {
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
    console.log("formData", formData)
  }

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
      <label>
        First name:
        <input
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleInputChange}
          value={formData.first_name || ''}
          required
        />
      </label>

      <label>
        Last name:
        <input
          type="text"
          name="last_name"
          id="last_name"
          onChange={handleInputChange}
          value={formData.last_name || ''}
          required
        />
      </label>

      <label>
        Mobile number:
        <input
          type="text"
          name="mobile_number"
          id="mobile_number"
          placeholder="xxx-xxx-xxxx"
          onChange={handleInputChange}
          value={formData.mobile_number || ''}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={formData.email || ''}
          required
        />
      </label>

      <label>
        Select a password:
        <input
          type="password"
          name="password"
          id="pasword"
          onChange={handleInputChange}
          value={formData.password || ''}
          required
        />
      </label>

      <label>
        Repeat your password:
        <input
          type="password"
          name="password_repeat"
          id="password_repeat"
          onChange={handleInputChange}
          value={formData.password_repeat || ''}
          required
        />
      </label>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="submit"> Submit </button>
    </form>
  );

  return (
    <React.Fragment>
      <h1 className="sign-up">SIGN UP</h1>
      <div className="signup-form-block">{formElement}</div>
    </React.Fragment>
  );
}

export default SignUp;
