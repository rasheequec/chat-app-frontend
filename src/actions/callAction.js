
import { API_URL } from "../utils/constants"
import { alertMessage } from "./commonAction"
import { history } from "../utils/history"
import { actionType } from "./types"
import { USER_TOKEN, USER_ID, INITIATE_CALL_EVENT, USER_NAME } from '../utils/constants'

export const initiateCall = (data, socket) => {
    return dispatch => {
    // socket.emit(actionType.MESSAGE_SEND_REQUEST, data)
    // console.log('gg',data.type, data.id)
    const roomName = localStorage.getItem(USER_ID)+data.receiverId
    data.roomName = roomName
    data.caller = localStorage.getItem(USER_NAME)
    data.callerId = localStorage.getItem(USER_ID)
    socket.emit(INITIATE_CALL_EVENT, data)
    dispatch(initiateCallRequest(data))
    }
  }
export const receiveCall = data => {
    return dispatch => {
      console.log('data is',data)
        dispatch(receiveCallRequest(data))
    }
}

export const createRoom = () => {
  console.log("created room")
    return dispatch => {
        dispatch(roomCreatedMessage())
    }
}

export const rejectCall = (message, id, name, socket) => {
  return dispatch => {
    dispatch(callRejected())
    if(message){
      dispatch(alertMessage(message, "error"))
    }
    else{
      const obj = {}
      obj.id = id
      obj.name = name
      socket.emit( actionType.CALL_REJECTED, obj)
    }
  }
}

  const initiateCallRequest = payload => {
    return({
      type: actionType.INITIATE_CALL,
      payload
    })
  }

  const receiveCallRequest = payload => {
    return({
      type: actionType.RECEIVE_CALL,
      payload
    })
  }

  const roomCreatedMessage = () => {
    return({
          type: actionType.ROOM_CREATED
      })
  }

  export const callRejected = () => {
    return({
      type: actionType.CALL_REJECTED
    })
  }