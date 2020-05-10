import React from 'react';
import Router from '../../routing/index';
import Alert from '../../shared/alertBox/alertBox';
import './App.css';
import { connect } from 'react-redux';
import { clearAlertMessage } from '../../actions/commonAction';
import { Spin } from 'antd';



const App = props => {

  const { alertMessage, messageType, isLoading } = props.data
  const clearAlertMessage = () =>{    
    setTimeout(function(){
       props.clearAlertMessage() 
      }, 5000);
  }
  
  return (
    <div>
      {alertMessage && <Alert message={alertMessage} type={messageType} />}
      {alertMessage && clearAlertMessage()}
      <Spin spinning={isLoading} size="large">
      <Router />
      </Spin>
    </div>
  );
}

const mapDispatchToProps = {
  clearAlertMessage
 };
const mapStateToProps = state => {
  return {
    data: state.common
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
