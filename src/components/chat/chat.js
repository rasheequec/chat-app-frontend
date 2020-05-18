import React, { useEffect } from 'react'
import { Row, Col, Divider } from 'antd';
import ChatList from './chatList';
import MesssageList from './messageList';
import MessageHeader from './messageHeader';
import ChatHeader from './chatHeader';
import { connect } from 'react-redux';
import { getChatData } from '../../actions/chatAction';
import './chat.css';

const style = { background: '#F5F6FA', padding: '8px 0' };

const Chat = (props) => {

  useEffect(() => {
    props.getChatData()
  },[]);

    return(
    <div style={{padding: "45px"}}>
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
            <ChatList data={props.data}/>
        </Col>
        <Col span={16} style={{backgroundColor: '#F5F6FA', padding: '0% 1.5% 1.5% 1.5%', height:"inherit"}}>
            <MesssageList />
        </Col>
    </Row>
    </div>
    )
}

const mapDispatchToProps = {
  getChatData
 };
const mapStateToProps = state => {
  return {
    data: state.chat
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat);