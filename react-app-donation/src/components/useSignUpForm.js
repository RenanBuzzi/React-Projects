import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import { useState, useEffect } from "react";

const useSignUpForm = (validade) => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    age: "",
    bloodGroup: "",
    address: "",
    gender: "",
    password: "",
    confirmPassword: "",
    acceptTerms: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [checked, setChecked] = useState();
  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
    values.acceptTerms = event.target.checked;
  };

  const resetForm = () => {
    setValues({});
  };

  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validade(values));
    console.log(values);
  };

  return {
    handleChange,
    values,
    errors,
    validade,
    handleSubmit,
    handleCheckBox,
    resetForm,
  };
};
export default useSignUpForm;
