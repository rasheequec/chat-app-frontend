import React, { useEffect, useState } from 'react'
import { Row, Col, Divider } from 'antd';
import ChatList from './chatList';
import MessageList from './messageList';
import MessageHeader from './messageHeader';
import ChatHeader from './chatHeader';
import { connect } from 'react-redux';
import { getChatData, sendMessage } from '../../actions/chatAction';
import './chat.css';

const style = { background: '#F5F6FA', padding: '8px 0' };

const Chat = (props) => {

  const [activeChat, setActiveChat] = useState({})

  useEffect(() => {
    props.getChatData(props.userid)
  },[]);

 const selectChatHandle = chat => {
    setActiveChat(chat)
  }

 const sendMessage = message => {
   const data = {}
   data.senderId = activeChat.id
   data.receiverId = props.userid
   data.message = message
   data.time = Date.now()
   props.sendMessage(data, props.socket)
  console.log("m is" ,data)
 } 

  const testHandle = () => {
    props.socket.emit('MESSAGE_SEND_REQUEST', { senderId: props.userid, receiverId: "5eae65bd565c0a0488a3fe3c", message: "helllll", time: Date.now() });
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
            <MessageList activeChat={activeChat} sendMessage={sendMessage} />
        </Col>
    </Row>
    </div>
    )
}

const mapDispatchToProps = {
  getChatData,
  sendMessage
 };
const mapStateToProps = state => {
  return {
    data: state.chat.chatData,
    socket: state.login.socket,
    userid: state.login.id
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);