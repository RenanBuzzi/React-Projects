import React from "react";
import "../../App.css";
import Footer from "../Footer";

const initialFormValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
};

const Contact = () => {
  return (
    <>
      <form>Contact</form>
      <Footer />
    </>
  );
};

export default Contact;
