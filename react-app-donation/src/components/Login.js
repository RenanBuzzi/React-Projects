import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Checkbox,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="UserName"
          placeHolder="Enter username"
          fullWidth
          required
        ></TextField>
        <TextField
          label="Password"
          placeHolder="Enter password"
          type="password"
          fullWidth
          required
        ></TextField>
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Remember Me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={btnStyle}
        >
          Sign IN
        </Button>
        <Typography>
          <Link
            href="#"
            //   onClick={preventDefault}
          >
            Forgot password ?
          </Link>
        </Typography>
        <Typography>
          Do you have any account password ?
          <Link
            href="#"
            //   onClick={preventDefault}
          >
            Sign Up ?
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
