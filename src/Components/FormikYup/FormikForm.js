
import { useFormik } from 'formik'

function FormikForm() { 

    const formInitialValues = {
        name : 'Aniket',
        email : 'xyz'
    }
    
    const formik = useFormik({
        initialValues: formInitialValues
    });
    
  return (
    <div>
    <h1>Formik Demo</h1>
        <form>
        <label htmlFor="">Enter Name : </label>
        <input type="text" name="name" value={formik.values.name} />
        <br /><br />
        <label htmlFor="">Enter Email : </label>
        <input type="text" name="email" value={formik.values.email} />
        <br /><br />
        <input type="submit" value='Submit'/>
        </form>


    </div>
  )
}

export default FormikForm