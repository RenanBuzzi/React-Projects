// import clsx from "clsx";
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
import useSignUpForm from "./useSignUpForm";
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

/*Getting the events from UseSignUpForm*/
const SignUpForm = () => {
  const {
    handleChange,
    handleNumbersChange,
    values,
    handleSubmit,
  } = useSignUpForm();

  const [value, setValue] = useState("female");
  const handleGenderChange = (event) => {
    setValue(event.target.value);
  };

  //   const [ageState, setAgeState] = useState();

  //   const handleNumbersChange = (e) => {
  //     const regex = /^[0-9\b]+$/;

  //     if (e.target.value === "" || regex.test(e.target.value)) {
  //       setAgeState(e.target.value);
  //     }
  //   };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
          <TextField
            name="fullName"
            fullWidth
            label="Full Name"
            placeholder="Enter with your full name !"
            value={values.fullName}
            onChange={handleChange}
            // {...(errors.fullName && {
            //   error: true,
            //   helperText: errors.fullName,
            // })}
          />
          <TextField
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter with your email !"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            name="mobile"
            fullWidth
            label="Mobile Number"
            placeholder="Enter with your mobile number !"
            value={values.mobile}
            onChange={handleChange}
          />
          <TextField
            name="age"
            fullWidth
            label="Age"
            placeholder="Enter with your Age!"
            value={values.ageState}
            onChange={handleNumbersChange}
          />
          <FormControl
            fullWidth
            style={StyleDropdownliast}
            // {...(errors.bloodGroup && { error: true })}
          >
            <InputLabel
            // ref={inputLabel}
            >
              {" "}
              Blood Group
            </InputLabel>
            <Select
              name="bloodGroup"
              value={values.bloodGroup}
              onChange={handleChange}
              //   labelWidth={labelWidth}
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
            {/* {errors.bloodGroup && (
              <FormHelperText>{errors.bloodGroup}</FormHelperText>
            )} */}
          </FormControl>
          <TextField
            name="address"
            placeholder="Enter with your Address!"
            fullWidth
            label="Address"
            value={values.address}
            onChange={handleChange}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              style={styleRadio}
              aria-label="gender"
              name="gender"
              value={value}
              onChange={handleGenderChange}
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
            name="password"
            type="password"
            fullWidth
            label="Password"
            placeholder="Enter with your password!"
            value={values.password}
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            type="password"
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password!"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={values.acceptTerms}
                onChange={handleChange}
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
            // onClick={resetForm}
          >
            Reset
          </Button>
        </Paper>
      </Grid>
    </form>
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
