import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Validation1() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  const handleName = (e) => {
    let name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(name);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else setEmailError(false);
    setEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(e.target[0].value + " " + e.target[1].value);

    let name = e.target[0].value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    const email = e.target[1].value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else setEmailError(false);

    if (!name.length < 3 && email.match(emailRegex)) {
      alert("Form has been Submitted...!!!");
      alert("Name = " + name + ", Email = " + email);
    }
  };

  return (
    <div className="formstyle">
      <h1>Form validation Demo</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name: </label>
        <input type="text" name="name" onChange={handleName} value={name} />
        <br />
        {nameError ? (
          <span style={{ color: "red" }}>
            Name Length must be greater than 2 characters
          </span>
        ) : (
          ""
        )}
        <br />
        <label htmlFor="">Enter Email: </label>
        <input type="text" name="email" onChange={handleEmail} value={email} />
        <br />
        {emailError ? <span style={{ color: "red" }}>Invalid Email</span> : ""}
        <br />
        <input type="submit" value="Submit" />
      </form>

      
    </div>
  );
}

export default Validation1;
