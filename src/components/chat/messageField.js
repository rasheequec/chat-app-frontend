import React, {useState} from "react"
import { Input } from "antd"
import { SendOutlined, UserOutlined } from '@ant-design/icons';

const MessageField = (props) => {

    const [message, setMessage] = useState("")

    const changeHandle = e => {
        setMessage(e.target.value)
    }
    const sendMessage = e => {
        if(message.length>0){
        props.sendMessage(message)
        setMessage("")
        }
    }
    return(
        <React.Fragment>
          <Input
           className="message-field"
           placeholder="Type your message here.."
           size="large"
           value={message}
           onChange={changeHandle}
           onPressEnter={sendMessage}
           suffix={
          <SendOutlined style={{ color: 'rgba(0,0,0,.45)' }} onClick={sendMessage}/>
      }
    />
        </React.Fragment>
    )
}

export default MessageField