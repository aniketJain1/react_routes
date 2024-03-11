import React, { useEffect, useState } from "react";

import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

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
  Button,
  useToast,
} from "@chakra-ui/react";

import axios from "axios";
import { Link } from "react-router-dom";

// For updating imports
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import Form from "react-bootstrap/Form";

import { Formik, useFormik } from "formik";
import { FormSchema } from "../FormikYupForm/FormSchema";

function Read() {
  const [getData, setData] = useState([]);

  const mockApiURL = "https://65eb204643ce164189334b44.mockapi.io/crud";

  const getApiData = async () => {
    try {
      const res = await axios.get(mockApiURL);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toast = useToast();
  const handleDelete = async (id) => {
    try {
      await axios.delete(mockApiURL + `/${id}`);
      getApiData();

      toast({
        title: `Data Deleted successfully !!!`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);


  // Edit Logic

  const { isOpen, onOpen, onClose } = useDisclosure();

  var formInitialValues = {
    name: "",
    email: "",
    age: "",
    pass: "",
    cpass: "",
  };

  const { handleSubmit, handleChange, values, errors, handleBlur, touched, setValues } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: FormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        onClose();

        // Make a POST request using Axios
        axios
          .put(`https://65eb204643ce164189334b44.mockapi.io/crud/${values.id}`, values)
          .then((response) => {
            // Handle the successful response
            console.log("Data submitted successfully:", response.data);
            getApiData();
            
            toast({
              title: `Data Updated successfully !!!`,
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            });

          })
          .catch((error) => {
            // Handle errors
            console.error("Error Data Updating:", error);
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

  const editHanldle= (editObj) =>{
      onOpen();
      setValues({ ...editObj });
      
  }



  return (
    <>
      <TableContainer className="w-100 border-1 m-3 rounded-4 border-dark">

        <Link to="/create">
          <Button colorScheme="green" margin={3}>
            Add New Details
          </Button>
        </Link>
        <Table
          variant="simple"
          className="w-75 m-auto mt-2 border-1 border-grey"
        >
          <TableCaption>Details Information</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Age</Th>
              <Th>Password</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {getData.map((items, key) => {
              return (
                <Tr key={key}>
                  <Td>{items.id}</Td>
                  <Td>{items.name}</Td>
                  <Td>{items.email}</Td>
                  <Td>{items.age}</Td>
                  <Td>{items.pass}</Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      onClick={() => editHanldle(items)}
                    >
                      <EditIcon />
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => {
                        if (window.confirm("Are You Sure To Delete Data ??")) {
                          handleDelete(items.id);
                        }
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Updation Form Logic */}


      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <Form className=" m-auto p-4 w-100" onSubmit={handleSubmit}>
            <label>
              <h2>Details Updation Form</h2>
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
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" mr={3} type="sumit">
                Update
              </Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}

function EditHandler({ editObj }) {
  // Updation/Edit logic

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  var formInitialValues = {
    name: "",
    email: "",
    age: "",
    pass: "",
    cpass: "",
  };

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: editObj,
      validationSchema: FormSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();

        // Make a POST request using Axios
        axios
          .put(`https://65eb204643ce164189334b44.mockapi.io/crud`, values)
          .then((response) => {
            // Handle the successful response
            console.log("Data submitted successfully:", response.data);
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
      {/* Updation Form Logic */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <Form className=" m-auto p-4 w-100" onSubmit={handleSubmit}>
            <label>
              <h2>Details Updation Form</h2>
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
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" mr={3} type="sumit">
                Update
              </Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Read;
