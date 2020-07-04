import React from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../../actions/loginAction';
import { Layout, Menu, Breadcrumb } from 'antd';
import Chat from '../chat/chat';
import GlobalRing from '../../shared/globalRing/globalRing'
import Nav from '../topNav/nav'
const { Header, Content, Footer } = Layout;

const Home = (props) => {

const logoutHandle = () => {
  props.socket && props.socket.disconnect()
  props.logoutRequest()
}
return(
    <div>
        {/* <button onClick={logoutHandle}>Logout</button> */}
        {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    </Header> */}
        <GlobalRing/>
        <Nav />
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