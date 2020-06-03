import React from "react"
import { Col, Row, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { USER_NAME } from '../../utils/constants';

const ChatHeader = (props) => {
    return(
        <div id="chat-header">
            <Row>
                <Col span={4} style={{padding:'2px'}}>
                <Avatar size={32} icon={<UserOutlined />} />
                </Col>
                <Col span={20} style={{padding:"2px"}}>
                    <Row>
                    <h5 className="chathead">{localStorage.getItem(USER_NAME)}</h5>
                    </Row>
                    <Row>
                    <span className="chatsub">rasheequec@gmail.com</span>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ChatHeader