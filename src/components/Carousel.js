import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imgPath from "./mikhail-vasilyev-NodtnCsLdTE-unsplash (1).jpg";
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
    padding: "24px",
    height: "85vh",
    position: "relative"
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
    color: "margenta",
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

function Carousel() {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <img className={classes.image} src={imgPath} alt="img"></img>
      <div className={classes.description}>
        <h1 className={classes.description_title}>양정훈의 기술 블로그</h1>
        <h3 className={classes.description_sub}>
          풀스택 개발자와 창업을 꿈꾸는 성장형 인간.
        </h3>
        <h3 className={classes.description_sub}> 나는 고양이가 좋다.</h3>
      </div>
    </div>
  );
}

export default Carousel;
