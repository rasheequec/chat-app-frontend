import React from 'react'
import { Row, Col, Divider } from 'antd';
import ChatList from './chatList';
import MesssageList from './messageList';
import './chat.css'

const style = { background: '#F5F6FA', padding: '8px 0' };

const Chat = (props) => {
    return(
    <div style={{margin: "6%", border: "1px solid black"}}>
        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}></Row> */}
     <Row>
      <Col className="gutter-row" span={8}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={16}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Row style={{height: "75vh"}}>
        <Col span={8} style={{backgroundColor: '#F5F6FA', padding: '1.5%', height:"inherit"}}>
            <ChatList />
        </Col>
        <Col span={16} style={{backgroundColor: '#F5F6FA', padding: '1.5%', height:"inherit"}}>
            <MesssageList />
        </Col>
    </Row>
    </div>
    )
}

export default Chat