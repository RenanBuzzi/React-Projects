import { useState, useEffect } from "react";

const useSignUpForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    Email: "",
    mobile: "",
    age: "",
    bloodGroup: "",
    address: "",
    password: "",
    confirmPassword: "",
    acceptTerms: "",
    ageState: "",
  });

  const [errors, setErrors] = useState({});
  //   const [ageState, setAgeState] = useState();

  const handleNumbersChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValues({ ageState: [e.target.value] });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, values, handleNumbersChange, handleSubmit };
};
export default useSignUpForm;
