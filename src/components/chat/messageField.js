import React from "react"
import { Input } from "antd"
import { SendOutlined, UserOutlined } from '@ant-design/icons';

const MessageField = (props) => {
    return(
        <React.Fragment>
          <Input
           className="message-field"
           placeholder="Type your message here.."
           size="large"
           suffix={
          <SendOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
      }
    />
        </React.Fragment>
    )
}

export default MessageField