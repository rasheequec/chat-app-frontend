import React from "react"
import { Input, Avatar, Col, Row } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import chat from "./chat";

const ChatList = (props) => {
    return(
        <div id="chatList">
        <div style={{textAlign: 'center'}}>
           <Input
           className="search-input"
           placeholder="Search"
           size="large"
           suffix={
          <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
      }
    />
    </div>

    <div>
        {props.data.map(chat => {
            return(
                <span className="userlist" onClick={() => props.selectChatHandle(chat)}>
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
            <h5 className="username">{chat.username}</h5>
                 </Col>
                 <Col span={4} className="time">
                 12:20
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">22</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>
            )
        })}
                {props.data.map(chat => {
            return(
                <span className="userlist" onClick={() => props.selectChatHandle(chat)}>
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
            <h5 className="username">{chat.username}</h5>
                 </Col>
                 <Col span={4} className="time">
                 12:20
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">22</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>
            )
        })}
                {props.data.map(chat => {
            return(
                <span className="userlist" onClick={() => props.selectChatHandle(chat)}>
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
            <h5 className="username">{chat.username}</h5>
                 </Col>
                 <Col span={4} className="time">
                 12:20
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">22</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>
            )
        })}
                {props.data.map(chat => {
            return(
                <span className="userlist" onClick={() => props.selectChatHandle(chat)}>
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
            <h5 className="username">{chat.username}</h5>
                 </Col>
                 <Col span={4} className="time">
                 12:20
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">22</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>
            )
        })}
                {props.data.map(chat => {
            return(
                <span className="userlist" onClick={() => props.selectChatHandle(chat)}>
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
            <h5 className="username">{chat.username}</h5>
                 </Col>
                 <Col span={4} className="time">
                 12:20
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">22</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>
            )
        })}
        {/* <span className="userlist">
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
                 <h5 className="username">John Smith</h5>
                 </Col>
                 <Col span={4} className="time">
                 12:20
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">22</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>

        <span className="userlist">
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
                 <h5 className="username">Andrew Symonds</h5>
                 </Col>
                 <Col span={4} className="time">
                 12:20
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">18</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>

        <span className="userlist">
        <Row>
         <Col span={4}>
         <Avatar size={42} icon={<UserOutlined />} />
         </Col>
         <Col span={20}>
         <Row>
                 <Col span={20}>
                 <h5 className="username">Beckham</h5>
                 </Col>
                 <Col span={4} className="time">
                 1:00
                 </Col>
             </Row>
             <Row>
                 <Col span={20}>
                 <p className="lastmessage">my message is here.</p>
                 </Col>
                 <Col span={4} className="message-icon-col">
                 <span className="message-icon">22</span>
                 </Col>
             </Row>
         </Col>
        </Row>
        </span>
 */}


    </div>
        </div>
    )
}

export default ChatList