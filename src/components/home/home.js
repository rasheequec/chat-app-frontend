import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/loginAction'

const Home = (props) => {
return(
    <div>
        <h1>This is your Home page</h1>
        <button onClick={() => props.logoutRequest()}>Logout</button>
    </div>
)
}

const mapDispatchToProps = {
    logoutRequest
   };
   
   export default connect(null, mapDispatchToProps)(Home)