import React from "react"
import { Row, Col, Avatar } from "antd"
import { VideoCameraOutlined, PhoneOutlined } from '@ant-design/icons';

const MessageHeader = (props) => {
    return(
        <div id="message-header">
            <Row>
                <Col span={20}>
                <h5 className="messagehead">Rasheeque</h5>
                </Col>
                <Col span={4} style={{textAlign:"center", color: "white"}}>
                <PhoneOutlined className="icon"/>
                <VideoCameraOutlined className="icon"/>
                </Col>
            </Row>
        </div>
    )
}

export default MessageHeader