import React, { useState, useEffect } from "react";

import { Route, Redirect, useHistory, useLocation } from "react-router-dom";

function PrivateRoute({ isAuth, path, children, ...rest }) {
  const [isAutheticated, setisAutheticated] = useState(false);

  useEffect(() => {
    setisAutheticated(isAuth());
  }, [isAutheticated]);

  return (
    <Route
      path={path}
      {...rest}
      render={({ location }) =>
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
