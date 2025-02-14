import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            <Component {...props} />
            // isLogin() ?
            //     <Component {...props} />
            // : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;