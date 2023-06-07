import React, { useState } from "react";
import FormCreate from './FormCreate';

const FormSubmit = () => {
    const [formValues, setFormValues] = useState({});

    const handleFormSubmit = (values) => {
        setFormValues(values);
    }

    return (
        <div className="container">
            <div className="form-container">
                <h2 className="text-center">Form:</h2>
                <FormCreate onFormSubmit={handleFormSubmit} />
            </div>

            <div className="mt-5">
                <h2>Submitted Form Values:</h2>
                <pre>{JSON.stringify(formValues, null, 2)}</pre>
            </div>
        </div>
    )
}

export default FormSubmit;