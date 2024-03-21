import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

const loginState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

function Login() {
  const [state, dispatch] = useReducer(reducer, loginState);

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData")); //retreiving data from local storage
    if (
      userData &&
      userData.email === state.email &&
      userData.password === state.password
    ) {
      alert("Login successful");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="box">
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Enter Password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>
        New Here? <NavLink to="/Signup"> Signup</NavLink>
      </p>
    </div>
  );
}

export default Login;
