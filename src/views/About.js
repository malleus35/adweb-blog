import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
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
    display: "flex",
    boxShadow: "0 3px 6px rgba(0,0,0,0.19), 0 10px 15px rgba(0,0,0,0.23)",
    minWidth: "300px",
    margin: "10px auto",
    padding: "8% 24px",
    zIndex: 1
  }
}));
function About() {
  const classes = useStyles();
  return (
    <div className={classes.test}>
      <Card className={classes.loginCard}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h4"
            color="textPrimary"
          >
            이름 : 양정훈 <br></br> <br></br> 생년월일 : 1995. 09. 14 <br></br>{" "}
            <br></br> 관심 분야 : Full Stack Development <br></br> <br></br>{" "}
            좋아하는 기술 : JavaScript, React, Node.js, Express, MongoDB, MySQL
            <br></br> <br></br> 취미 : 독서, 롤, 음악듣기
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
