import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const cookies = new Cookies();
    return ( <
        Route {...rest }
        render = {
            (routeProps) =>
            <
            Redirect to = { "/" }
            />

        }
        />
    );
};

export default PrivateRoute;