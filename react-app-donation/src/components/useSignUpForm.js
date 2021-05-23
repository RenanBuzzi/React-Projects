import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import { useState, useEffect } from "react";

const useSignUpForm = (validate) => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    age: "",
    bloodGroup: "",
    address: "",
    // gender: "",
    // password: "",
    // confirmPassword: "",
    // acceptTerms: "",
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
    window.location.reload();
  };

  // const [errors, setErrors] = useState({});
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setErrors(validate(values));
  // };

  return {
    handleChange,
    values,
    validate,
    //handleSubmit,
    //errors,
    // handleCheckBox,
    resetForm,
  };
};
export default useSignUpForm;
