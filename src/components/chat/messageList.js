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
  const test = () => {
    var domain = "meet.jit.si";
    // const startAudioOnly = props.callMode === CALL_MODE.AUDIO
    var options = {
        roomName:"123as45",
        // configOverwrite: {
        //     startAudioOnly: startAudioOnly,
        // },
        // width: 1000,
        // height: props.iframeHeight,
        parentNode: document.getElementById('messageList'),
        // interfaceConfigOverwrite: {
        //     filmStripOnly: false,
        //     TOOLBAR_BUTTONS: [

        //     ],
            //FILM_STRIP_MAX_HEIGHT: 60,
        // },
        // onload: iframeOnLoad
    }
    // eslint-disable-next-line no-undef
    const api = new window.JitsiMeetExternalAPI(domain, options);
    // api.addEventListener('videoConferenceJoined', () => {
    //   console.log('Local User Joined');
      // setLoading(false);
      // api.executeCommand('displayName', 'MyName');
    //  });
  }
    return(
    <React.Fragment>
      {/* <button onClick={test}>Test</button> */}
         <div id="messageList" ref={messageRef}>
         <hr />
        {props.data && props.data[props.activeChatIndex] && props.data[props.activeChatIndex].messages.map(chat => {
          return (
           <div className={chat.senderId == localStorage.getItem(USER_ID) ? "rightdiv":"leftdiv"}>
            <p style={chat.senderId == localStorage.getItem(USER_ID) ? {backgroundColor: '#040404'} : {backgroundColor: '#3a3a3a'}} className="message">{chat.message}</p><br/><br/>
       </div>
          )  
        })}
         </div>
        <MessageField sendMessage={props.sendMessage}/>
    </React.Fragment>
    )
}

export default MessageList