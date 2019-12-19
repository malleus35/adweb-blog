import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imgPath from "./notfound.jpg";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: "24px"
  },
  title: {
    flexGrow: 1,
    marginLeft: "24px"
  },
  test: {
    padding: "24px 24px 5px 24px",
    height: "85vh"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  description: {
    position: "absolute",
    color: "black",
    bottom: "10px"
  },
  description_title: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "24px 0px"
  },
  description_sub: {
    fontSize: "24px",
    margin: "12px"
  }
}));

function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <img className={classes.image} src={imgPath} alt="img"></img>
      <div className={classes.description}>
        <h1 className={classes.description_title}>404 Not Found!</h1>
        <h3 className={classes.description_sub}>페이지를 찾을 수 없어요!!</h3>
        <h3 className={classes.description_sub}>올바른 경로로 접속해주세요!</h3>
      </div>
    </div>
  );
}

export default NotFound;
