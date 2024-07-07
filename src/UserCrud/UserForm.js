import { Field, Form, Formik } from "formik"

export function UserForm({ user, onUserFormSubmit }) {
    return <div className="user-creation-form">
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                mobile: ''
            }}
            onSubmit={(values, { resetForm }) => {
                console.log("Submitted values", values)
                onUserFormSubmit(values)
                resetForm()
            }}
        >
            <Form>
                <Field id="firstName" name="firstName" placeholder="First Name" />
                <Field id="lastName" name="lastName" placeholder="Last Name" />
                <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <Field
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile"
                    type="text"
                />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
}