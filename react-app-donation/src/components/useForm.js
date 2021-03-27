import React, { useState } from "react";

const useForm = (initialFieldValues, validade, setCurrentId) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => { 
        const { name, value } = e.target
        const fieldValue = { [name]: value}
        setValues({
            ...values,
            ...fieldValue
        })
        validade(fieldValue)
    }

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
        setErrors({})
        setCurrentId(0)
    }


    return {
        values,
        setValues, 
        errors,
        setErrors,
        handleInputChange,
        resetForm
    };
}
export default useForm;