import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { json } from "react-router";
import * as yup from "yup";
import RedErrorMessage from "./RedErrorMessage";

import { Container } from 'react-bootstrap'

function FormikForm2() {
  // const [formData, setFormData] = useState({});
  const NewValidation = yup.object({
    name: yup.string().required("Name is Must"),
    age: yup.number().min(10).max(50).required("Age is Must"),
    pass: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
        "Enter Strong Password"
      )
      .required("Password is Must"),
    gender: yup.string().required("Gender Is Must"),
    hobby: yup.array().min(1, "1 Hobby is Must"),
    country: yup.string().required('Country Is Must'),
    comment: yup.string().max(500).required("Comment Is Must"),
  });

  return (
    <div style={{width : '100%', textAlign:'center', margin:'10px'}}>
      <Container className="bg-primary rounded-5">

      <Formik
        validationSchema={NewValidation}
        initialValues={{
          name: "",
          age: "",
          pass: "",
          gender: "",
          hobby: [],
          country: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          // console.log(values.name);
          // setFormData(values);
        }}
      >
        <Form>
        <br />

        {/* Name */}
          <label htmlFor="">Enter Name: </label>
          {/* for textbox */}
          <Field type="text" name="name" />
          <br />
          {/* <ErrorMessage name='name' style={{color : 'red'}} /> */}
          <RedErrorMessage name="name" />
          <br />

        {/* Age */}
          <label htmlFor="">Enter Age: </label>
          {/* for textbox */}
          <Field type="number" name="age" />
          <br />
          <RedErrorMessage name="age" />
          <br />

        {/* Password */}
          <label htmlFor="">Enter Password: </label>
          {/* for textbox */}
          <Field type="password" name="pass" />
          <br />
          <RedErrorMessage name="pass" />
          <br />

        {/* Gender */}
          <label htmlFor="">Gender: </label>
          <label htmlFor=""> Male </label>
          <Field type="radio" name="gender" value="Male" />
          <label htmlFor=""> Female </label>
          <Field type="radio" name="gender" value="female" />
          <br />
          <RedErrorMessage name="gender" />
          <br />

        {/* Hobbies */}
          <label htmlFor="">Hobbies: </label>

          <label htmlFor="">Writing </label>
          <Field type="checkbox" name="hobby" value="Writing" />

          <label htmlFor="">Reading </label>
          <Field type="checkbox" name="hobby" value="Reading" />

          <label htmlFor="">Sleeping </label>
          <Field type="checkbox" name="hobby" value="Sleeping" />
          <br />
          <RedErrorMessage name="hobby" />
          <br />

        {/* Country */}
          <label htmlFor="">Country: </label>
          <Field name="country" as="select">
            <option value="">select</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </Field>
          <br />
          <RedErrorMessage name="country" />
          <br />

        {/* Comments */}
          <label htmlFor="">Comments: </label>
          <Field as="textarea" name="comment" />
          <RedErrorMessage name="comment" />
          <br />

        {/* Submit */}
          <button type="submit">Submit</button>

          <br /><br />
        </Form>
      </Formik>

      {/* <h1>{JSON.stringify(formData)}</h1> */}
      {/* <h1>{formData.name}</h1>
      <h1>{formData.age}</h1> */}

      </Container>

      
    </div>
  );
}

export default FormikForm2;
