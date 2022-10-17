import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

import '../../App.css'

function SignUp() {

  const navigate = useNavigate()

  const initialFormState = {
    first_name : '',
    last_name : '',
    mobile_number : '',
    email : '',
  }

  const [formData, setFormData] = useState({initialFormState})

  const formElement = (
    <form className="form" >
      <label>
        First name:
        <input
          type="text"
          name="first_name"
          id="first_name"
          onChange={""}
          value={formData.first_name}
          required
        />
      </label>

      <label>
        Last name:
        <input
          type="text"
          name="last_name"
          id="last_name"
          onChange={""}
          value={formData.last_name}
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
          onChange={""}
          value={formData.mobile_number}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={""}
          value={formData.email}
          required
        />
      </label>

      <label>
        Select a password:
        <input
          type="password"
          name="password"
          id="pasword"
          onChange={""}
          required
        />
      </label>

      <label>
        Repeat your password:
        <input
          type="password"
          name="password-repeat"
          id="password-repeat"
          onChange={""}
          required
        />
      </label>
      <button type="button" onClick={""}>
        {" "}
        Cancel{" "}
      </button>
      <button type="submit"> Submit </button>
    </form>
  );


  return <h1 className='sign-up'>SIGN UP</h1>
}

export default SignUp