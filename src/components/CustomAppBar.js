import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  toolbar: {
    position: "relative",
    justifyContent: "space-between"
  },
  link: {
    textDecoration: "none",
    fontSize: 30,
    color: "#f7f7f7",
    flexGrow: 1,
    display: "contents"
  },
  appbar: {
    backgroundColor: "black"
  }
});

function CustomAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <a href="/" className={classes.link}>
            <Typography style={{ display: "inline" }} variant="h6">
              Maestroprog's Dev Blog
            </Typography>
          </a>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={props.callbackFromParent(true)}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar;
