import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const cookies = new Cookies();
    const token = cookies.get('token')

    return (
      <Route
        {...rest}
        render={(routeProps) =>
            token ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/"} />
          )
        }
      />
    );
  };
  
  export default PrivateRoute;
  