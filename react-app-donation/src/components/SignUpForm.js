import clsx from "clsx";
import {
  Grid,
  Paper,
  Avatar,
  withStyles,
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
import validade from "./validadeInfo";

const initialFieldValues = {
  fullName: "",
  mobile: "",
  email: "",
  age: "",
  bloodGroup: "",
  address: "",
};

const StyleDropdownlist = {
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

const SignUpForm = () => {
  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    handleCheckBox,
    resetForm,
  } = useSignUpForm(validade);

  // Getting Gender Value
  const [value, setValue] = useState("female");
  const handleGenderChange = (event) => {
    setValue(event.target.value);
    values.gender = event.target.value;
  };

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      onReset={resetForm}
    >
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
            placeholder="Enter with your full name."
            value={values.fullName}
            onChange={handleChange}
            {...(errors.fullName && {
              error: true,
              helperText: errors.fullName,
            })}
          />
          <TextField
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter with your email."
            value={values.email}
            onChange={handleChange}
            {...(errors.email && {
              error: true,
              helperText: errors.email,
            })}
          />
          <TextField
            name="mobile"
            fullWidth
            label="Enter with your Mobile number."
            placeholder="(00) 912345678"
            value={values.mobile}
            onChange={handleChange}
            {...(errors.mobile && {
              error: true,
              helperText: errors.mobile,
            })}
          />
          <TextField
            name="age"
            fullWidth
            label="Age"
            placeholder="Enter with your Age."
            value={values.age != "" ? values.age : ""}
            onChange={handleChange}
            {...(errors.age && {
              error: true,
              helperText: errors.age,
            })}
          />
          <FormControl fullWidth style={StyleDropdownlist}>
            <InputLabel>Blood Group</InputLabel>
            <Select
              name="bloodGroup"
              placeholder="Enter with your Blood Group."
              value={values.bloodGroup}
              onChange={handleChange}
              {...(errors.bloodGroup && {
                error: true,
                helperText: errors.bloodGroup,
              })}
            >
              <MenuItem value="">Select Blood Group</MenuItem>
              <MenuItem value="A+">A+</MenuItem>
              <MenuItem value="A-">A-</MenuItem>
              <MenuItem value="B+">B+</MenuItem>
              <MenuItem value="B-">B-</MenuItem>
              <MenuItem value="AB+">AB+</MenuItem>
              <MenuItem value="AB-">AB-</MenuItem>
              <MenuItem value="O+">O+</MenuItem>
              <MenuItem value="O-">O-</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="address"
            placeholder="Enter with your Address!"
            fullWidth
            label="Address"
            value={values.address}
            onChange={handleChange}
            {...(errors.address && {
              error: true,
              helperText: errors.address,
            })}
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
            {...(errors.password && {
              error: true,
              helperText: errors.password,
            })}
          />
          <TextField
            name="confirmPassword"
            type="password"
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password!"
            value={values.confirmPassword}
            onChange={handleChange}
            {...(errors.confirmPassword && {
              error: true,
              helperText: errors.confirmPassword,
            })}
          />
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={values.checked}
                checked={values.checked}
                onChange={handleCheckBox}
                name="acceptTerms"
              />
            }
            label="I accept the terms and condictions"
          />
          <FormHelperText
            {...(errors.acceptTerms && {
              error: true,
              helperText: errors.acceptTerms,
            })}
          >
            {errors.acceptTerms}
          </FormHelperText>

          <Button
            style={btnStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Button
            type="reset"
            style={btnStyle}
            variant="contained"
            color="secondary"
            onChange={handleChange}
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
