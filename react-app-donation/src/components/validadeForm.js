import React from "react";
import useSignUpForm from "./useSignUpForm";

/*Validation Form, check the UseForm and this DCandidateForm.js*/
const validadeForm = (values) => {
  let errors = {};

  if (!values.fullName.trim()) {
    errors.fullname = "The full Name is required!";
  }

  if (
    !values.email.trim() || values.email === /^$|.+@.+..+/.test(values.email)
      ? ""
      : "Email is not valid."
  );
  setErrors({
    ...errors,
  });

  if (
    !values.age.trim() || values.age === /^[0-9]*$/.test(age.email)
      ? ""
      : "Age is Required!"
  );
  setErrors({
    ...errors,
  });

  if (!values.bloodGroup === "Blood Group") {
    errors.bloodGroup = "Choose your Blood Group!";
  }

  if (!values.address.trim()) {
    errors.address = "The Address is required!";
  }

  if (!values.address.trim() {
    errors.address = "The Address is required!";
  }




};

export default validadeForm;
