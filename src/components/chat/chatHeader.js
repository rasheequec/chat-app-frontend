import React from "react"
import { Col, Row, Avatar } from "antd"
import { UserOutlined } from '@ant-design/icons';

const ChatHeader = (props) => {
    return(
        <div id="chat-header">
            <Row>
                <Col span={4} style={{padding:'2%'}}>
                <Avatar size={32} icon={<UserOutlined />} />
                </Col>
                <Col span={20} style={{padding:"1.5%"}}>
                    <Row>
                    <h5 className="chathead">My Name</h5>
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