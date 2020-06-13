import React, { useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd';
import ChatList from './chatList';
import MessageList from './messageList';
import MessageHeader from './messageHeader';
import ChatHeader from './chatHeader';
import { connect } from 'react-redux';
import { getChatData, sendMessage, receiveMessage } from '../../actions/chatAction';
import { initiateCall, receiveCall, createRoom, rejectCall } from '../../actions/callAction';
import { initiateSocket } from '../../actions/loginAction';
import { USER_ID, SOCKET_URL, INITIATE_CALL_EVENT } from '../../utils/constants';
import io from "socket.io-client";
import './chat.css';

const style = { background: '#F5F6FA'};

const Chat = (props) => {

  const [activeChatIndex, setActiveChatIndex] = useState(0)
  const [chatData, setChatData] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    props.getChatData(localStorage.getItem(USER_ID))
    if(!props.socket){
      const socket = io(SOCKET_URL,  {query:`userid=${localStorage.getItem(USER_ID)}`});
      socket.on('connect', function (socket) {
      });
      socket.emit('join', {userid: localStorage.getItem(USER_ID)});
      socket.on('RECEIVE_MESSAGE',props.receiveMessage)
      socket.on('SOMEONE_CALLING', props.receiveCall )
      socket.on('USER_ACCEPTED_CALL',props.createRoom)
      socket.on('CALL_REJECTED_MESSAGE', props.rejectCall)
      props.initiateSocket(socket)
    }
    else{
      props.socket.on('RECEIVE_MESSAGE',props.receiveMessage)
      props.socket.on('SOMEONE_CALLING', props.receiveCall )
      props.socket.on('USER_ACCEPTED_CALL',props.createRoom)
      props.socket.on('CALL_REJECTED_MESSAGE', props.rejectCall)
    }  
  },[]);

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
 } 

 const searchHandle = e =>{
  console.log(e.target.value)
  if(e.target.value.length>0){
    setIsSearching(true)
  }
  else{
    setIsSearching(false)
  }
  const searchFilter = props.data.filter(data => {
    return data.username.toLowerCase().substring(0, e.target.value.length) ==
    e.target.value.toLowerCase()
  })
  setChatData(searchFilter)
}

useEffect(() => {
  if(chatData.length == 0 && !isSearching){
    setChatData(props.data)
  }
});

const initiateCall = (receiverId, type, receiver) => {
  props.initiateCall({receiverId, type, receiver}, props.socket)
}

    return(
    <div style={{height: "100vh"}}>
        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}></Row> */}
     <Row>
      <Col className="gutter-row" span={5} style={{backgroundColor: '#F5F6FA'}}> 
        <ChatHeader />
        <ChatList data={chatData} selectChatHandle={selectChatHandle} searchHandle={searchHandle}/>
      </Col>
      <Col className="gutter-row" span={19} style={{backgroundColor: '#F5F6FA'}}>
        <MessageHeader data={props.data} activeChatIndex={activeChatIndex} initiateCall={initiateCall}/>
        <MessageList data={props.data} activeChatIndex={activeChatIndex} sendMessage={sendMessage} callData={props.callData} roomCreated={createRoom} socket={props.socket}/>
      </Col>
    </Row>
    </div>
    )
}

const mapDispatchToProps = {
  getChatData,
  sendMessage,
  receiveMessage,
  initiateSocket,
  initiateCall,
  receiveCall,
  createRoom,
  rejectCall
 };
const mapStateToProps = state => {
  return {
    data: state.chat.chatData,
    socket: state.login.socket,
    callData: state.call
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);