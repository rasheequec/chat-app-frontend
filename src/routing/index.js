import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  import PrivateRoute from './privateRoute'
  import PublicRoute  from './publicRoute'
  import Login from '../components/authorization/login/login'
  import Signup from '../components/authorization/signup/signup'
  import Home from '../components/home/home'
  import { history } from '../utils/history'

const Routing = props => {
    return(
    <Router history={history}>
        <Switch>
        <PublicRoute component={Login} path="/login" exact />
        <PublicRoute component={Signup} path="/signup" exact />
        <PrivateRoute component={Home} path="/" exact />
          {/* <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route> */}
          {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
        </Switch>
    </Router>
    )
}

export default Routing