import React from "react"
import { PhoneOutlined } from '@ant-design/icons';
import RingTone from "../../assets/mp3/ringing.mp3";
import './globalRing.css'

const GlobalRing = () => {
    const audio = new Audio(RingTone)
    audio.loop = true;
    // audio.play()
    return(
        <div id="global-ring">
            <PhoneOutlined onClick={() => audio.play()} className="accept"/>
            <PhoneOutlined  className="reject"/>
        </div>
    )
}
export default GlobalRing