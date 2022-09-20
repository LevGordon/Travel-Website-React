import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import '../../App.css'
 
const { REACT_APP_API_BASE_URL } = process.env;

function SignUp() {

  const navigate = useNavigate()

  const initialFormState = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    email: '',
  }

  const [formData, setFormData] = useState([...initialFormState])
  const [error, setError] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    setErrorMessage(error);
    return () => abortController.abort();
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await fetch(`${REACT_APP_API_BASE_URL}/reservations`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data: formData,
      }),
    });
    const resData = await response.json();
    console.log(resData);
    if (resData.error) {
      setError(resData.error);
    }
    if (response.status !== 400) {
      setFormData({ ...initialFormState });
      // history.goBack();
      navigate(`/`)
    }
  };

  const handleCancel = () => {
    setFormData({ ...initialFormState });
    navigate(-1);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const formElement = (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="first_name">
        First name:
        <input
          type="text"
          name="first_name"
          id="first_name"
          onChange={handleInputChange}
          value={formData.first_name}
          required
        />
      </label>

      <label htmlFor="last_name">
        Last name:
        <input
          type="text"
          name="last_name"
          id="last_name"
          onChange={handleInputChange}
          value={formData.last_name}
          required
        />
      </label>

      <label htmlFor="mobile_number">
        Mobile number:
        <input
          type="text"
          name="mobile_number"
          id="mobile_number"
          placeholder="xxx-xxx-xxxx"
          onChange={handleInputChange}
          value={formData.mobile_number}
          required
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={formData.email}
          required
        />
      </label>

      <label htmlFor="password">
        Select a password:
        <input
          type="password"
          name="password"
          id="pasword"
          onChange={handleInputChange}
          required
        />
      </label>

      <label htmlFor="password-repeat">
        Repeat your password:
        <input
          type="password"
          name="password-repeat"
          id="password-repeat"
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="button" onClick={handleCancel}>
        {" "}
        Cancel{" "}
      </button>
      <button type="submit"> Submit </button>
    </form>
  );


  return <h1 className='sign-up'>SIGN UP</h1>
}

export default SignUp