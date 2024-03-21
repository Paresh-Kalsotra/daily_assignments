import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

const signupState = {
  FirstName: "",
  LastName: "",
  email: "",
  contact: "",
  password: "",
  ConfirmPassword: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

function Signup() {
  const [state, dispatch] = useReducer(reducer, signupState);

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //data check
    if (state.password && state.password === state.ConfirmPassword) {
      alert("signup successful");

      // Storing data in local storage
      localStorage.setItem("userData", JSON.stringify(state));
      console.log("Signup Data:", state);
    } else {
      alert("Password miss match");
    }
  };

  return (
    <div className="box">
      <h1>Signup </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="First Name"
          value={state.FirstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <br />
        <input
          type="text"
          name="Last Name"
          value={state.LastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />{" "}
        <br />
        <input
          type="number"
          name="contact"
          value={state.contact}
          onChange={handleChange}
          placeholder="Contact"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <br />
        <input
          type="password"
          name="confirmPassword"
          value={state.ConfirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>
        Already a User? <NavLink to="/">Login</NavLink>
      </p>
    </div>
  );
}

export default Signup;
