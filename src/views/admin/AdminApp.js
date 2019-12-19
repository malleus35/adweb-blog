import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import Get from "./Get";
import Login from "./Login";
import Post from "./Post";
import NotFound from "../NotFound";
import PrivateRoute from "./PrivateRoute";

function AdminApp(props) {
  const [isAutheticated, setisAutheticated] = useState(false);

  const auth = user => {
    if (!user) {
      console.log(user);
      setisAutheticated(false);
      console.log("isAutheticated : ", isAutheticated);
    } else {
      setisAutheticated(true);
      console.log(isAutheticated);
    }
  };

  const isAuth = () => isAutheticated;

  useEffect(() => {
    props.isAdminChange();
    return () => {
      props.isAdminChange();
    }; //eslint-disable-next-line
  }, []);

  useEffect(() => {}, [isAutheticated]);

  return (
    <>
      <Switch>
        <Route path="/admin" exact>
          <Login auth={auth}></Login>
        </Route>
        <PrivateRoute path="/admin/auth/get" isAuth={isAuth}>
          <Get></Get>
        </PrivateRoute>
        <PrivateRoute path="/admin/auth/post" isAuth={isAuth}>
          <Post></Post>
        </PrivateRoute>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </>
  );
}

export default AdminApp;
