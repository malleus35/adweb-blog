import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import "typeface-roboto";

import "./css/normalize.css";
import "./css/app.css";

import AdminApp from "./views/admin/AdminApp";
import About from "./views/About";
import Daily from "./views/Daily";
import Develop from "./views/Develop";
import Show from "./views/Show";
import NotFound from "./views/NotFound";

import CustomAppBar from "./components/CustomAppBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

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
    marginLeft: "24px",
    marginRight: "24px"
  },
  list: {
    width: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    fontSize: 30,
    color: "black"
  },
  drawer: {
    justifyContent: "center"
  },
  listItem: {
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false,
    isAdmin: false
  });
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, isOpen: open });
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["About", "Develop", "Daily"].map((text, index) => (
          <Link to={`/${text}`} className={classes.link} key={index}>
            <ListItem className={classes.listItem} button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const adminList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Get", "Post"].map((text, index) => (
          <Link to={`/admin/auth/${text}`} className={classes.link} key={index}>
            <ListItem className={classes.listItem} button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const adminChange = () => setState({ ...state, isAdmin: !state.isAdmin });

  return (
    <>
      <CustomAppBar callbackFromParent={toggleDrawer}></CustomAppBar>
      <Toolbar></Toolbar>
      <Grid container>
        <Switch>
          <Route path="/admin">
            <AdminApp isAdminChange={adminChange}></AdminApp>
          </Route>
          <Route path="/" exact>
            <Grid item xs={12}>
              <Carousel></Carousel>
            </Grid>
            <Develop></Develop>
          </Route>
          <Route path="/About">
            <Grid item xs={12}>
              <Carousel></Carousel>
            </Grid>
            <About></About>
          </Route>
          <Route path="/Daily">
            <Grid item xs={12}>
              <Carousel></Carousel>
            </Grid>
            <Daily></Daily>
          </Route>
          <Route path="/Develop">
            <Grid item xs={12}>
              <Carousel></Carousel>
            </Grid>
            <Develop></Develop>
          </Route>
          <Route path="/show/:articleId">
            <Show></Show>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={state.isOpen}
          onClose={toggleDrawer(false)}
        >
          {state.isAdmin === true ? adminList() : sideList()}
        </Drawer>
        <Grid item xs={12}>
          <Footer></Footer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
