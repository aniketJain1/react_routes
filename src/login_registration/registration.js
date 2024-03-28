import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios'
import expressapi from "../api/expressapi";

const URL = `http://localhost:5001/api/auth/register`;

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);

    try {
      
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      
      console.log("Success : " + response );

      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="formstyle w-100">
        <Container>
          <Row>
            <Col>
              <Form className=" w-75 m-auto p-4" onSubmit={handleSubmit}>
                <label>
                  <h2>Registration Form</h2>
                </label>

                <Form.Group className="mb-2" controlId="formBasic">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={user.username}
                    placeholder="Enter name"
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasic">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                    placeholder="email"
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasic">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={user.phone}
                    placeholder="phone"
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasic">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                    placeholder="Enter name"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Registration;
