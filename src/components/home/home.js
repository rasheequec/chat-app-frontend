import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/loginAction';
import Chat from '../chat/chat'

const Home = (props) => {

const logoutHandle = () => {
  props.socket.disconnect()
  props.logoutRequest()
}
return(
    <div>
        <button onClick={logoutHandle}>Logout</button>
        <Chat />
    </div>
)
}

const mapStateToProps = state => {
    return {
      socket: state.login.socket
    }
  }
const mapDispatchToProps = {
    logoutRequest
   };
   
   export default connect(mapStateToProps, mapDispatchToProps)(Home)