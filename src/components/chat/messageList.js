import React, {useEffect} from "react"
import { Row, Col } from "antd"
import MessageField from "./messageField"
import { USER_ID } from '../../utils/constants';

const MessageList = (props) => {
  const messageRef = React.createRef()



  useEffect(() => {
    scrollDown()
  },[props.data, props.activeChatIndex]);

  useEffect(() => {
    if(props.callData.isRoomCreated && props.callData.onCall && props.callData.roomName){
    
      const callHungup = () => {
        props.rejectCall('', localStorage.getItem(USER_ID) == props.callData.receiverId ? props.callData.callerId : props.callData.receiverId, localStorage.getItem(USER_ID) == props.callData.receiverId ? props.callData.receiver : props.callData.caller, props.socket)
        api.dispose();
        console.log('hung up')
      }
      const endCall = () => {
        if(api){
          api.dispose()
        }
      }

      props.socket.on('CALL_REJECTED_MESSAGE', endCall)

      if(props.callData.receiverId == localStorage.getItem(USER_ID)){
      props.socket.emit('CALL_ACCEPTED',{userid: props.callData.callerId})
      }
      console.log("done")
      const url = "meet.jit.si"
      const options = {
        roomName: props.callData.roomName,
        parentNode: document.getElementById('jitsi-section')
      }
      const api = new window.JitsiMeetExternalAPI(url, options);
      api.addEventListeners({
        readyToClose: callHungup,
        // outgoingMessage: outgoingMessageListener
    });

      // props.roomCreated()
    }
  },[props.callData]);

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
        parentNode: document.getElementById('jitsi-section'),
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
      <div id="jitsi-section" style={!props.callData.onCall ? {display:'none'} : {}}>

      </div>
         <div id="messageList" ref={messageRef}  style={props.callData.onCall ? {display:'none'} : {}}>
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