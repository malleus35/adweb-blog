import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
//eslint-disable-next-line

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: "24px"
  },
  title: {
    flexGrow: 1,
    margin: "24px"
  },
  test: {
    position: "relative",
    marginLeft: "24px",
    marginRight: "24px",
    padding: "100px",
    width: "100%",
    height: "100%"
  },
  loginCard: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    boxShadow: "0 3px 6px rgba(0,0,0,0.19), 0 10px 15px rgba(0,0,0,0.23)",
    minWidth: "300px",
    margin: "10px auto",
    padding: "8%",
    zIndex: 1
  },
  textField: {
    display: "flex",
    marginBottom: "30px",
    "& label.Mui-focused": {
      color: "#57575F"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#57575F"
    }
  },
  submit: {
    margin: "auto",
    display: "inherit",
    width: "200px",
    height: "50px",
    borderRadius: "30px"
  }
}));

function Login(props) {
  const [contents, setContents] = useState(null);
  const [submits, setSubmits] = useState({ userId: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitFunc = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:5000/users/signin/${submits.userId}`,
        {
          userId: submits.userId,
          password: submits.password
        },
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbjMiLCJpYXQiOjE1NzY3Mjg3NjQsImV4cCI6MTU3NjczMjM2NCwiaXNzIjoiZ2VuaWUifQ.tofurcW6xQd-48W5tf8KlwqeCqJAE2X6Ijytsult4TM"
          }
        }
      );
      const tmp = () =>
        new Promise(async (resolve, reject) => {
          await resolve(setContents({ ...response.data.data }));
        }).then(rData => {
          console.log(response.data.data);
          console.log(contents);
          props.auth(response.data.data);
        });

      const test = tmp();
    } catch (e) {
      console.log(e);
      if (error) return <div>에러가 발생했습니다</div>;
    }
    setLoading(false);
  };

  const onChangeValue = e => {
    setSubmits({ ...submits, [e.target.name]: e.target.value });
  };

  const classes = useStyles();

  return (
    <Card className={classes.loginCard}>
      <CardContent>
        <Typography className={classes.title} variant="h3" color="textPrimary">
          L O G I N
        </Typography>
        <form onSubmit={submitFunc} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            label="ID"
            name="userId"
            onChange={onChangeValue}
          />
          <TextField
            className={classes.textField}
            label="Password"
            type="password"
            name="password"
            onChange={onChangeValue}
          />
          <Button type="submit" variant="contained" className={classes.submit}>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Login;
