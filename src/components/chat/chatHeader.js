import React from "react"
import { Col, Row, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { USER_NAME, USER_EMAIL } from '../../utils/constants';

const ChatHeader = (props) => {
    return (
    
        <div id="chat-header">
            {console.log("props",props)}
            <Avatar size={70} src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg" icon={<UserOutlined />} />
             <h4 className="username">{localStorage.getItem(USER_NAME)}</h4>
             <p className="email">{localStorage.getItem(USER_EMAIL)}</p>
        </div>
    )
}

export default ChatHeader