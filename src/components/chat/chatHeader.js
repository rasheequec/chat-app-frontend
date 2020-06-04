import React from "react"
import { Col, Row, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { USER_NAME } from '../../utils/constants';

const ChatHeader = (props) => {
    return (
        <div id="chat-header">
            <Avatar size={70} src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg" icon={<UserOutlined />} />
            <h4 className="username">Rasheeque Abdulla</h4>
            <p className="email">rasheeque1997@gmail.com</p>
        </div>
    )
}

export default ChatHeader