import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../css/footer.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: "24px"
  },
  title: {
    flexGrow: 1,
    marginBottom: "10px"
  },
  test: {
    marginLeft: "24px",
    marginRight: "24px"
  }
});
function Footer() {
  const classes = useStyles();
  return (
    <div className="footer_container">
      <div className={classes.test}>
        <Typography className={classes.title} variant="h5">
          Maestroprog's Dev Blog
        </Typography>
        <Typography variant="subtitle1">양정훈의 기술 블로그</Typography>
        <Typography variant="body1">
          React Express MongoDB Node.js를 좋아함
        </Typography>
        <Typography variant="body1">010-7193-8984</Typography>
        <Typography variant="body1">maestroprog@naver.com</Typography>
      </div>
    </div>
  );
}

export default Footer;
