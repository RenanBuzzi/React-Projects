import clsx from "clsx";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Checkbox,
  Button,
  MenuItem,
  InputLabel,
  Select,
  FormHelperText,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useToasts } from "react-toast-notifications";

const initialFieldValues = {
  fullName: "",
  mobile: "",
  email: "",
  age: "",
  bloodGroup: "",
  address: "",
};

const StyleDropdownliast = {
  margin: "20px auto",
  minWidth: 210,
};

const paperStyle = {
  padding: "30px 20px",
  width: 300,
  margin: "20px auto",
};

const headerStyle = { margin: 0 };
const avatarStyle = {
  backgroundColor: "#1bbd7e",
};

const styleRadio = {
  display: "initial",
};

const formStyleRadio = {
  marginTop: 20,
};

const btnStyle = {
  padding: "10px 20px",
  width: 300,
  margin: "8px auto",
};

/*Main Methode*/
const SignUpForm = ({ classes, ...props }) => {
  //toast msg.
  const { addToast } = useToasts();

  /*Validation Form, check the UseForm and this DCandidateForm.js*/
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("mobile" in fieldValues)
      temp.mobile = fieldValues.mobile ? "" : "This field is required.";
    if ("bloodGroup" in fieldValues)
      temp.bloodGroup = fieldValues.bloodGroup ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /^$|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFieldValues, validate, props.setCurrentId);

  //material-ui select
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  /*Submitting and Updating the form*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const onSuccess = () => {
        resetForm();
        addToast("Submitted successfully", { appearance: "success" });
      };
      if (props.currentId == 0) props.createDCandidate(values, onSuccess);
      else props.updateDCandidate(props.currentId, values, onSuccess);
    }

    resetForm();
  };

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  /*Populate form by ID*/
  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.dCandidateList.find((x) => x.id == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  return (
    <Grid container>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TextField
            name="fullName"
            fullWidth
            label="Full Name"
            placeholder="Enter with your full name !"
            value={values.fullName}
            onChange={handleInputChange}
            // className={clsx(classes.margin, classes.textField)}
            {...(errors.fullName && {
              error: true,
              helperText: errors.fullName,
            })}
          ></TextField>
          <TextField
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter with your email !"
            value={values.email}
            onChange={handleInputChange}
          ></TextField>
          <FormControl
            variant="outlined"
            style={StyleDropdownliast}
            {...(errors.bloodGroup && { error: true })}
          >
            <InputLabel ref={inputLabel}> Blood Group</InputLabel>
            <Select
              name="bloodGroup"
              value={values.bloodGroup}
              onChange={handleInputChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">Select Blood Group</MenuItem>
              <MenuItem value="A+">A +ve</MenuItem>
              <MenuItem value="A-">A -ve</MenuItem>
              <MenuItem value="B+">B +ve</MenuItem>
              <MenuItem value="B-">B -ve</MenuItem>
              <MenuItem value="AB+">AB +ve</MenuItem>
              <MenuItem value="AB-">AB -ve</MenuItem>
              <MenuItem value="O+">O +ve</MenuItem>
              <MenuItem value="O-">O -ve</MenuItem>
            </Select>
            {errors.bloodGroup && (
              <FormHelperText>{errors.bloodGroup}</FormHelperText>
            )}
          </FormControl>

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              style={styleRadio}
              aria-label="gender"
              name="gender"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            name="mobile"
            fullWidth
            label="Mobile Number"
            placeholder="Enter with your mobile number !"
            value={values.mobile}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            name="passsword"
            type="password"
            fullWidth
            label="Password"
            placeholder="Enter with your password !"
            // value={values.fullName}
            onChange={handleInputChange}
          ></TextField>
          <TextField
            name="cofirmPassword"
            type="password"
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password !"
            onChange={handleInputChange}
          ></TextField>
          <FormControlLabel
            control={
              <Checkbox
                checked={setValue.checkedA}
                onChange={handleInputChange}
                name="CheckedTerms"
              />
            }
            label="I accept the terms and condictions"
          />
          <Button
            style={btnStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Button
            style={btnStyle}
            variant="contained"
            color="secondary"
            onClick={resetForm}
          >
            Reset
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  dCandidateList: state.dCandidate.list,
});

const mapActionToProps = {
  createDCandidate: actions.create,
  updateDCandidate: actions.update,
};

export default connect(mapStateToProps, mapActionToProps)(SignUpForm);
