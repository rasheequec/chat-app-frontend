import React, { useEffect } from "react"
import { Row, Col } from "antd"
import MessageField from "./messageField"
import { connect } from 'react-redux';

const MessageList = (props) => {
  useEffect(() => {
   console.log('data changes',props.data)
  },[props.data]);
    return(
    <React.Fragment>
         <div id="messageList">
        {props.data && props.data[props.activeChatIndex] && props.data[props.activeChatIndex].messages.map(chat => {
          return (
           <div>
            <p className="leftmessage">{chat.message}</p><br/><br/>
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

const mapStateToProps = state => {
  return {
    data: state.chat.chatData
  }
}
export default connect(mapStateToProps)(MessageList);