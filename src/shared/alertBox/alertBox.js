import React from "react"
import "./alertBox.css"

const Alert = (props) => {
    const {type, message} = props
    return(
        <div id="alert-box">
            <p className="alert-message" style={type == "success" ? {backgroundColor: "#F6FFED"} : {backgroundColor: "white", color: "red"}}>{message}</p>
        </div>
    )
}
export default Alert