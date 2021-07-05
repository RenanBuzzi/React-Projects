import React from "react";
import "../App.css";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import useForm from "../Pages/useForm";
import "../Pages/Contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid, TextField, Button } from "@material-ui/core";
import talk2beimg from "../images/Originav2.jpg";

toast.configure();
export default function Contact() {
  const sendEmail = (e) => {
    if (validate()) {
      emailjs
        .sendForm(
          "service_3ohg94w",
          "template_o2r7zv3",
          e.target,
          "user_DaMICwMkKFZ4BsHCPeTU0"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const initialFieldValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // const { addToast } = useToasts();
  const emailValidation = /^$|.+@.+..+|\s+/;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "Name is required.";
    if ("message" in fieldValues)
      temp.message = fieldValues.message ? "" : "Message is required.";
    if ("subject" in fieldValues)
      temp.subject = fieldValues.subject ? "" : "Suject is required.";

    if ("email" in fieldValues)
      temp.email = emailValidation.test(fieldValues.email)
        ? ""
        : "Email is not valid.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFieldValues, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      sendEmail(e);
      resetForm();
      toast.success("Message has been sent successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 8000,
      });
    }
  };

  return (
    <>
      <div class="ContainerLeft">
        <img className="contactImg" src={talk2beimg} alt="Logo" />

        <div className="ContainerRight">
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <div className="textfield">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="name"
                      variant="standard"
                      label="Name"
                      size="large"
                      value={values.name}
                      onChange={handleInputChange}
                      {...(errors.name && {
                        error: true,
                        helperText: errors.name,
                      })}
                    />
                  </Grid>
                </div>

                <div className="textfield">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="email"
                      variant="standard"
                      label="Email"
                      value={values.email}
                      onChange={handleInputChange}
                      {...(errors.email && {
                        error: true,
                        helperText: errors.email,
                      })}
                    />
                  </Grid>
                </div>

                <div className="textfield">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      className="textFields"
                      name="subject"
                      variant="standard"
                      label="Subject"
                      value={values.subject}
                      onChange={handleInputChange}
                      {...(errors.subject && {
                        error: true,
                        helperText: errors.subject,
                      })}
                    />
                  </Grid>
                </div>

                <div className="textfield">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="standard-multiline-flexible"
                      aria-label="minimum height"
                      rows={5}
                      rowsMax={5}
                      multiline
                      placeholder="Minimum 5 rows"
                      name="message"
                      variant="outlined"
                      label="Message"
                      value={values.message}
                      onChange={handleInputChange}
                      {...(errors.message && {
                        error: true,
                        helperText: errors.message,
                      })}
                    />
                  </Grid>
                </div>

                <div className="buttonSubmit">
                  <Grid item xs={12}>
                    <Button
                      className="textfield"
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
