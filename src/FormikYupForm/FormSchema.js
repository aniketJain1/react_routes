import * as Yup from 'yup';

export const FormSchema = Yup.object({
    // name:Yup.string().min(3).max(20).required("Name is Must"),
    name:Yup.string().min(3,'Too Short').max(20,'Invalid Name').required("Name is Must"),
    email:Yup.string().email().required("Email is Must"),
    age:Yup.number().min(10).max(50).required('Age is Must'),
    pass: Yup.string().required("Pass is Must").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/, 'Enter Strong Password'),
    cpass : Yup.string().required("Confirm Password is Must").oneOf([Yup.ref('pass'), null], 'Both Password Must Match'),

});
