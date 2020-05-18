import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/loginAction';
import Chat from '../chat/chat'

const Home = (props) => {
return(
    <div>
        <button onClick={() => props.logoutRequest()}>Logout</button>
        <Chat />
    </div>
)
}

const mapDispatchToProps = {
    logoutRequest
   };
   
   export default connect(null, mapDispatchToProps)(Home)