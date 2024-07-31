import "./Signup.css";
import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/atoms/inputs/Input";
import WidePinkButton from "../../../components/atoms/buttons/WidePinkButton";
import LinkElement from "../../../components/atoms/buttons/LinkElement";
import MainHeader from "../../../components/atoms/text/MainHeader";

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
          <MainHeader>Signup</MainHeader>
          <Input
            type="text"
            placeholder="First name"
            change={handleFirstName}
          />
          <Input type="text" placeholder="Last name" change={handleLastName} />
          <Input type="email" placeholder="Email" change={handleEmail} />
          <Input
            type="password"
            placeholder="Create password"
            change={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            change={(e) => setPasswordAgain(e.target.value)}
          />
          <PasswordChecklist
            rules={["minLength", "specialChar", "number", "capital", "match"]}
            minLength={8}
            value={password}
            valueAgain={passwordAgain}
          />
          <WidePinkButton type="submit" value="Signup" />
          <p>
            Already have an account? <LinkElement to="/login" value="Login" />
          </p>
        </div>
      </form>
    </div>
  );
}
