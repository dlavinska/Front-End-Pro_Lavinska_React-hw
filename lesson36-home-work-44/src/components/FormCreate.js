import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as FormBS } from "react-bootstrap";

const FormCreate = (props) => {

    return (
        <Formik
            onSubmit={(values, { setSubmitting }) => {
                props.onFormSubmit(values);
                setSubmitting(false);
            }}
            
            initialValues={{
                name: "",
                email: "",
                phone: "",
            }}

            validationSchema={Yup.object({
                name: Yup.string()
                    .max(9, "Name must be 9 characters or less")
                    .required("*Name is required"),
                email: Yup.string()
                    .email("Invalid email address")
                    .required("*Email is required"),
                phone: Yup.string()
                    .matches(/^[0-9]{12}$/, "Phone number is not valid. Must be only 12-characters length and numbers")
                    .required("*Phone number required"),
            })}
        >
            {({ isSubmitting}) => (
                <Form>
                    <div class="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        
                        <Field
                            type="text"
                            name="name"
                            placeholder="Enter your name..."
                            as={FormBS.Control}
                        />

                        <ErrorMessage name="name" component={FormBS.Text} className="text-danger" />
                    </div>

                    <div class="form-group mt-2">
                        <label htmlFor="email" className="form-label">Email:</label>

                        <Field
                            type="email"
                            name="email"
                            placeholder="Enter your email address..."
                            as={FormBS.Control}
                        />

                        <ErrorMessage name="email" component={FormBS.Text} className="text-danger" />
                    </div>

                    <div class="form-group mt-2">
                        <label htmlFor="phone" className="form-label">Phone:</label>

                        <Field
                            type="text"
                            name="phone"
                            placeholder="Enter your phone (12 digits)..."
                            as={FormBS.Control}
                        />

                        <ErrorMessage name="phone" component={FormBS.Text}  className="text-danger"/>
                    </div>

                    <Button disabled={isSubmitting} type="submit" variant = "primary mt-4">
                        Submit
                    </Button> {' '}

                    <Button type="reset" variant = "primary mt-4">
                        Reset
                    </Button>

                </Form>
            )}
            
            </Formik>
    )
}

export default FormCreate;