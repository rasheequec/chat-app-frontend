import React, { useEffect } from "react"
import { PhoneOutlined } from '@ant-design/icons';
import RingTone from "../../assets/mp3/ringing.mp3";
import { connect } from 'react-redux';
import { createRoom, rejectCall } from '../../actions/callAction';
import { USER_ID } from '../../utils/constants';
import './globalRing.css';

const GlobalRing = props => {
    const audio = new Audio(RingTone)
    audio.loop = true;
    // audio.play()
    useEffect(()=>{
        console.log("ringing change")
        if(props.call.ringing){
            console.log("ringing play")
           audio.play()
        }
        else{
            audio.pause()
           console.log("ringing pause")
        }
    },[props.call])

    return(
        <>
        {props.call.ringing && <div id="global-ring">
            <PhoneOutlined  className="accept" onClick={() => props.createRoom()}/>
            <PhoneOutlined  className="reject" onClick={() => props.rejectCall('', localStorage.getItem(USER_ID) == props.call.receiverId ? props.call.callerId : props.call.receiverId, localStorage.getItem(USER_ID) == props.call.receiverId ? props.call.caller : props.call.receiver, props.socket)}/>
        </div>}
        </>
    )
}
const mapStateToProps = state => {
    return {
      call: state.call,
      socket: state.login.socket
    }
  }
  const mapDispatchToProps = {
    createRoom,
    rejectCall
   };

  export default connect(mapStateToProps, mapDispatchToProps)(GlobalRing)