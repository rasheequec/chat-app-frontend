import React, { useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd';
import ChatList from './chatList';
import MessageList from './messageList';
import MessageHeader from './messageHeader';
import ChatHeader from './chatHeader';
import { connect } from 'react-redux';
import { getChatData, sendMessage, receiveMessage } from '../../actions/chatAction';
import { initiateSocket } from '../../actions/loginAction';
import { USER_ID, SOCKET_URL } from '../../utils/constants';
import io from "socket.io-client";
import './chat.css';

const style = { background: '#F5F6FA', padding: '8px 0' };

const Chat = (props) => {

  const [activeChatIndex, setActiveChatIndex] = useState(0)

  useEffect(() => {
    props.getChatData(localStorage.getItem(USER_ID))
    if(!props.socket){
      const socket = io(SOCKET_URL);
      socket.on('connect', function (socket) {
      });
      socket.emit('join', {userid: localStorage.getItem(USER_ID)});
      socket.on('RECEIVE_MESSAGE',props.receiveMessage)
      props.initiateSocket(socket)
    }
    else{
      props.socket.on('RECEIVE_MESSAGE',props.receiveMessage)
    }  
  },[]);

  // useEffect(() => {
  //   console.log('data changes',props.data)
  //  },[activeChatIndex]);

 const selectChatHandle = chat => {
   const findIndex = props.data.findIndex(a => {
    return a.chatId == chat.chatId
   })
   setActiveChatIndex(findIndex)
  }

 const sendMessage = message => {
   const data = {}
   data.senderId = localStorage.getItem(USER_ID)
   data.receiverId = props.data[activeChatIndex].id
   data.message = message
   data.time = Date.now()
   props.sendMessage(data, props.socket)
  console.log("m is" ,data)
 } 

  const testHandle = () => {
    props.socket.emit('MESSAGE_SEND_REQUEST', { senderId: localStorage.getItem(USER_ID), receiverId: "5eae65bd565c0a0488a3fe3c", message: "helllll", time: Date.now() });
  }

    return(
    <div style={{padding: "45px"}}>
      <button onClick={testHandle}>Test</button>
        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}></Row> */}
     <Row>
      <Col className="gutter-row" span={8} style={{backgroundColor: '#F5F6FA', padding: '1% 1.5%', height:"inherit"}}> 
        <ChatHeader />
      </Col>
      <Col className="gutter-row" span={16} style={{backgroundColor: '#F5F6FA', padding: '1% 1.5%', height:"inherit"}}>
        <MessageHeader />
      </Col>
    </Row>
    <Row>
        <Col span={8} style={{backgroundColor: '#F5F6FA', padding: '0% 1.5% 1.5% 1.5%', height:"inherit"}}>
            <ChatList data={props.data} selectChatHandle={selectChatHandle}/>
        </Col>
        <Col span={16} style={{backgroundColor: '#F5F6FA', padding: '0% 1.5% 1.5% 1.5%', height:"inherit"}}>
            <MessageList activeChatIndex={activeChatIndex} sendMessage={sendMessage} />
        </Col>
    </Row>
    </div>
    )
}

const mapDispatchToProps = {
  getChatData,
  sendMessage,
  receiveMessage,
  initiateSocket
 };
const mapStateToProps = state => {
  return {
    data: state.chat.chatData,
    socket: state.login.socket
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);