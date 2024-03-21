import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

const signupState = {
  Name: "",
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

function Signup() {
  const [state, dispatch] = useReducer(reducer, signupState);

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Storing data in local storage
    localStorage.setItem("userData", JSON.stringify(state));
    alert("signup successful");
    console.log("Signup Data:", state);
  };

  return (
    <div className="box">
      <h1>Signup </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          value={state.Name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
        />
        <br />
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
        Already a User? <NavLink to="/">Login</NavLink>
      </p>
    </div>
  );
}

export default Signup;
