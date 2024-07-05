import { Formik, Field, Form } from 'formik';
import "./FormExample.css"

export function FormikExample() {
    return <div>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                gender: 'male'
            }}
            onSubmit={(values) => {
                console.log("Submitted values", values)
            }}
        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="First Name" />
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Last Name" />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />

                <label>
                    <Field type="radio" name="gender" value="male"></Field>
                    Male
                </label>
                <label>
                    <Field type="radio" name="gender" value="female" ></Field>
                    Female
                </label>
                <Field name="color" as="select">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </Field>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
}