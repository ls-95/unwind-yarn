import "./Signup.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, password, passwordAgain);

    // TODO: Make login post to API
    fetch("http://localhost:3001/signup", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      });

    navigate("/home");
  }

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <div className="Signup">
      <form onSubmit={handleSubmit}>
        <div className="SignupContent">
          <h1>Signup</h1>
          <input
            type="text"
            placeholder="First name"
            required
            onChange={handleFirstName}
          />
          <input
            type="text"
            placeholder="Last name"
            required
            onChange={handleLastName}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={8}
            value={password}
            valueAgain={passwordAgain}
          />
          <input type="submit" value="Signup" className="SignupButton" />
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
