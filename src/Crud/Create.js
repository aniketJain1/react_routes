import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Formik, useFormik } from "formik";
import { FormSchema } from "../FormikYupForm/FormSchema";

import axios from "axios";

import { useToast } from "@chakra-ui/react";
import { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

function Create() {
  const [apiData, setApiData] = useState([]);

  const formInitialValues = {
    // name: "Aniket",
    // email: "xyz",
    // age : '12'

    name: "",
    email: "",
    age: "",
    pass: "",
    cpass: "",
  };

  // const formik = useFormik({
  //     initialValues: formInitialValues,
  //     onSubmit: (values) => {
  //       console.log(values);
  //       console.log(values.name);
  //       console.log(values.email);
  //     }

  const toast = useToast();
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: FormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        console.log(values.name);
        console.log(values.email);
        console.log(values.age);
        console.log(values.pass);
        console.log(values.cpass);
        action.resetForm();

        // Make a POST request using Axios
        axios
          .post("https://65eb204643ce164189334b44.mockapi.io/crud", values)
          .then((response) => {
            // Handle the successful response
            console.log("Data submitted successfully:", response.data);
            setApiData(response.data);
            toast({
              title: `Data submitted successfully !!!`,
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
          })
          .catch((error) => {
            // Handle errors
            console.error("Error submitting data:", error);
            toast({
              title: "Server Not Found :( ",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
          });
      },
    });

  const errorstyle = {
    color: "red",
    padding: "2px",
    margin: "",
  };

  return (
    <>
      <div className="formstyle w-100">
        <Container>
          <Row>
            <Col md={7}>
              <Form className=" w-75 m-auto p-4" onSubmit={handleSubmit}>
                <label>
                  <h2>Details Form</h2>
                </label>
                <Form.Group className="mb-2" controlId="formBasic">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    placeholder="Enter name"
                  />
                  {errors.name && touched.name ? (
                    <span style={errorstyle}>{errors.name}</span>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    placeholder="Enter email"
                  />
                  {errors.email && touched.email ? (
                    <span style={errorstyle}>{errors.email}</span>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="text"
                    name="age"
                    onChange={handleChange}
                    value={values.age}
                    onBlur={handleBlur}
                    placeholder="Enter Age"
                  />
                  {errors.age && touched.age ? (
                    <span style={errorstyle}>{errors.age}</span>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    // type="password"
                    name="pass"
                    onChange={handleChange}
                    value={values.pass}
                    onBlur={handleBlur}
                    placeholder="Password"
                  />
                  {errors.pass && touched.pass ? (
                    <span style={errorstyle}>{errors.pass}</span>
                  ) : null}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="text"
                    // type="password"
                    name="cpass"
                    onChange={handleChange}
                    value={values.cpass}
                    onBlur={handleBlur}
                    placeholder="Password"
                  />
                  {errors.cpass && touched.cpass ? (
                    <span style={errorstyle}>{errors.cpass}</span>
                  ) : null}
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col md={5}>
              <TableContainer className="pt-4">
                <Table variant="simple">
                  <TableCaption>Details Information</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Details</Th>
                      <Th>Data</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Name</Td>
                      <Td>{apiData.name}</Td>
                    </Tr>
                    <Tr>
                      <Td>Email</Td>
                      <Td>{apiData.email}</Td>
                    </Tr>
                    <Tr>
                      <Td>Age</Td>
                      <Td>{apiData.age}</Td>
                    </Tr>
                    <Tr>
                      <Td>Password</Td>
                      <Td>{apiData.pass}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <Link to="/read">
                <Button
                  variant="success"
                  type="button"
                  className="pe-5 ps-5 m-4"
                >
                  View All
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Create;
