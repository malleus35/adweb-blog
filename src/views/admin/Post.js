import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
//eslint-disable-next-line
const url = "http://localhost:5000/users";

const useStyles = makeStyles(theme => ({
  test: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "100%"
  },
  title: {
    flexGrow: 1
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
    marginTop: "20px",
    marginBottom: "20px",
    "& label.Mui-focused": {
      color: "#57575F"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#57575F"
    },
    flexGrow: 1
  },
  submit: {
    margin: "10px auto",
    display: "inherit",
    width: "200px",
    height: "50px",
    borderRadius: "30px"
  },
  otherButton: {
    margin: "10px auto",
    display: "inline-block",
    width: "200px",
    height: "50px",
    borderRadius: "30px",
    flexGrow: 1
  }
}));
function Post() {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <Card className={classes.loginCard}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h3"
            color="textPrimary"
          >
            Submit New Post
          </Typography>
          <form noValidate autoComplete="off">
            <TextField className={classes.textField} label="Post Title" />
            <Typography
              variant="button"
              style={{ margin: "10px", marginLeft: 0, display: "block" }}
            >
              Selected: Develop
            </Typography>
            <Typography
              variant="button"
              style={{ margin: "10px", marginLeft: 0, display: "block" }}
            >
              Upload Thumbnail : 404.jpg
            </Typography>
            <Button className={classes.otherButton}>Select Category</Button>
            <Button className={classes.otherButton}>Upload Thumbnail</Button>
            <TextField
              className={classes.textField}
              id="outlined-multiline-static"
              label="Post"
              multiline
              rows="15"
              placeholder="Write your post"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              Completion
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Post;
