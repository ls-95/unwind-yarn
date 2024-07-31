import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkElement from "../../../components/atoms/buttons/LinkElement";
import Input from "../../../components/atoms/inputs/Input";
import WidePinkButton from "../../../components/atoms/buttons/WidePinkButton";
import MainHeader from "../../../components/atoms/text/MainHeader";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);

    fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      });
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
          <MainHeader>Login</MainHeader>
          <Input type="email" placeholder="Email" change={handleEmail} />
          <Input
            type="password"
            placeholder="Password"
            change={handlePassword}
          />
          <WidePinkButton type="submit" value="Login" />
          <p>
            Don't have an account? <LinkElement to="/" value="Signup" />
          </p>
        </div>
      </form>
    </div>
  );
}
