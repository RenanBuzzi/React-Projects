import { AirlineSeatLegroomReducedTwoTone } from "@material-ui/icons";
import React from "react";
import useSignUpForm from "./useSignUpForm";

const validadeInfo = (values) => {
  let errors = {};

  //Full Name Validation
  if (!values.fullName.trim()) {
    errors.fullName = values.fullName ? "" : "The Full Name is requeried!";
  }

  //*Email Validation
  if (!values.email.trim()) {
    errors.email = "Email Requeried";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/.test(values.email)) {
    errors.email = "Email Address is invalid!";
  }

  // Mobile number Validation
  if (!values.mobile.trim()) {
    errors.mobile = "Mobile number is requeried!";
  } else if (
    !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(values.mobile)
  ) {
    errors.mobile = "Mobile number is invalid!";
  }

  // Age Validation
  if (!values.age.trim()) {
    errors.age = "Age is requeried!";
  } else if (!/^[0-9\b]+$/.test(values.age)) {
    errors.age = "Age is invalid!";
  }

  // Blood Group
  if (!values.bloodGroup.trim()) {
    errors.bloodGroup = "Bllod Group is requeried!";
  } else if (!/^[0-9\b]+$/.test(values.bloodGroup)) {
    errors.bloodGroup = "Blood Group is invalid!";
  }

  //Address Validation
  if (!values.address.trim()) {
    errors.address = values.address ? "" : "The Address is requeried!";
  }

  if (!values.password.trim()) {
    errors.password = "Password is requerid";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 chacaters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password do not match!";
  } else {
    errors.confirmPassword = "";
  }

  // alert(values.acceptTerms);
  // if (!values.acceptTerms.trim()) {
  //   errors.acceptTerms = values.acceptTerms ? "" : "The Address is requeried!";
  // }

  return errors;
};

export default validadeInfo;
