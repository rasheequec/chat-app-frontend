import React, {useState} from "react"
import { Input } from "antd"
import { SendOutlined, UserOutlined } from '@ant-design/icons';

const MessageField = (props) => {

    const [message, setMessage] = useState("")

    const changeHandle = e => {
        setMessage(e.target.value)
    }
    return(
        <React.Fragment>
          <Input
           className="message-field"
           placeholder="Type your message here.."
           size="large"
           onChange={changeHandle}
           suffix={
          <SendOutlined style={{ color: 'rgba(0,0,0,.45)' }} onClick={() => props.sendMessage(message)}/>
      }
    />
        </React.Fragment>
    )
}

export default MessageField