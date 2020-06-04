import React from "react"
import { Input, Avatar, Col, Row } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import chat from "./chat";

const ChatList = (props) => {
    return (
        <div id="chatList">
            <hr />
            <div style={{ textAlign: 'center' }}>
                <Input
                    className="search-input"
                    placeholder="Search"
                    size="large"
                    suffix={
                        <SearchOutlined style={{ color: '#efe1e1' }} />
                    }
                />
            </div>
            <hr />
            <div>
                {props.data.map(chat => {
                    return (
                        <>
                            <div className="userlist" onClick={() => props.selectChatHandle(chat)}>
                                <div style={{ width: '18%' }}>
                                    <Avatar size={38} icon={<UserOutlined />} />
                                </div>
                                <div className="userdiv">
                                    <h5 className="username">{chat.username}</h5>
                                    <p className="lastmessage">my message is here.</p>
                                </div>
                                <div style={{ width: "15%" }}>
                                    <p className="time">12:20</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatList