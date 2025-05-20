import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dummy login check
    if (username === "user@yahoo.com" && password === "password") {
      setAuth(true); // set login state
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input_box">
          <div className="password_title">
            <label htmlFor="password">Password</label>
            <a href="#">Forgot Password?</a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log In</button>

        <p className="sign_up">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
