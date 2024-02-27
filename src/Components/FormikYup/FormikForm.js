import { Formik, useFormik } from "formik";
import { FormSchema } from "./FormSchema";

function FormikForm() {
  const formInitialValues = {
    // name: "Aniket",
    // email: "xyz",
    // age : '12'

    name: '',
    email: '',
    age : '',
    pass : '',
    cpass : '',

  };

  // const formik = useFormik({
  //     initialValues: formInitialValues,
  //     onSubmit: (values) => {
  //       console.log(values);
  //       console.log(values.name);
  //       console.log(values.email);
  //     }

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
    initialValues: formInitialValues,
    validationSchema: FormSchema ,
    onSubmit: (values, action) => {
      console.log(values);
      console.log(values.name);
      console.log(values.email);
      console.log(values.age);
      console.log(values.pass);
      console.log(values.cpass);
      action.resetForm();
    },
  });

  return (
    <div>
      <h1>Formik Demo</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="">Enter Name : </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
        />
        <br />
        {/* <span style={{color:'red'}}>{errors.name}</span> */}
        {errors.name && touched.name ? (<span style={{color:'red'}}>{errors.name}</span>) : null}
        <br />
        <br />
        <label htmlFor="">Enter Email : </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        <br />
        {/* <span style={{color:'red'}}>{errors.email}</span> */}
        {errors.email && touched.email ? (<span style={{color:'red'}}>{errors.email}</span>) : null}
        <br />
        <br />

        <label htmlFor="">Enter Age : </label>
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={values.age}
          onBlur={handleBlur}
        />
        <br />
        {/* <span style={{color:'red'}}>{errors.age}</span> */}
        {errors.age && touched.age ? (<span style={{color:'red'}}>{errors.age}</span>) : null}
        <br />
        <br />

        <label htmlFor="">Enter Password : </label>
        <input
          type="text"
          // type="password"
          name="pass"
          onChange={handleChange}
          value={values.pass}
          onBlur={handleBlur}
        />
        <br />
        {/* <span style={{color:'red'}}>{errors.pass}</span> */}
        {errors.pass && touched.pass ? (<span style={{color:'red'}}>{errors.pass}</span>) : null}
        <br />
        <br />
        
        <label htmlFor="">Enter Confirm Password : </label>
        <input
          type="text"
          // type="password"
          name="cpass"
          onChange={handleChange}
          value={values.cpass}
          onBlur={handleBlur}
        />
        <br />
        {/* <span style={{color:'red'}}>{errors.cpass}</span> */}
        {errors.cpass && touched.cpass ? (<span style={{color:'red'}}>{errors.cpass}</span>) : null}
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FormikForm;
