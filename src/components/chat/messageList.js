import React, {useEffect} from "react"
import { Row, Col } from "antd"
import MessageField from "./messageField"
import { USER_ID } from '../../utils/constants';

const MessageList = (props) => {
  const messageRef = React.createRef()
  useEffect(() => {
    scrollDown()
  },[props.data, props.activeChatIndex]);
  const scrollDown = () => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight ? messageRef.current.scrollHeight : "0"
  }
    return(
    <React.Fragment>
         <div id="messageList" ref={messageRef}>
         <hr />
        {props.data && props.data[props.activeChatIndex] && props.data[props.activeChatIndex].messages.map(chat => {
          return (
           <div className={chat.senderId == localStorage.getItem(USER_ID) ? "rightdiv":"leftdiv"}>
            <p style={chat.senderId == localStorage.getItem(USER_ID) ? {backgroundColor: '#040404'} : {backgroundColor: '#3a3a3a'}} className="message">{chat.message}</p><br/><br/>
            {/* <p className="rightmessage">Hey bro, Iam here andrews. Hope you doing well. </p>
            <p className="leftmessage">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p><br/><br/>
            <p className="rightmessage">Hey bro, Iam here andrews. Hope you doing well. </p>
            <p className="leftmessage">Is it true </p><br/><br/> */}
            {/* <p className="rightmessage">Hey bro, Iam here andrews. Hope you doing well. Ahdf ia sissssada sdfsfsfsikad adsd sfs. </p>
            <p className="leftmessage">HLorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" </p><br/><br/> */}
       </div>
          )  
        })}
         </div>
        <MessageField sendMessage={props.sendMessage}/>
    </React.Fragment>
    )
}

export default MessageList