import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
    navigate("/home");
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="LoginContent">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handlePassword}
          />
          <input type="submit" value="Login" className="LoginButton" />
          <p>
            Don't have an account? <Link to="/">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
