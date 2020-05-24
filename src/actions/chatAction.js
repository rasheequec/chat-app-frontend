import axios from "axios"
import { API_URL } from "../utils/constants"
import { startLoading, stopLoading, alertMessage } from "./commonAction"
import { history } from "../utils/history"
import { actionType } from "./types"
import { USER_TOKEN, USER_ID } from '../utils/constants'

export const getChatData = id => {
  const headers = {
    Authorization: localStorage.getItem(USER_TOKEN)
  };
    return dispatch => {
      dispatch(startLoading());
      axios
        .get(`${API_URL}chat/chatlist/${id}`, {headers})
        .then(res => {
          dispatch(stopLoading())
          if(res.data){
            dispatch(getChatDataSuccess(res.data))
          }
          else{
            dispatch(alertMessage(res.data.message,"error"))
          }
        })
        .catch(err => {
          dispatch(stopLoading());
          dispatch(alertMessage(err.message, "error"))
        });
    };
  };

  export const sendMessage = (data, socket) => {
    return dispatch => {
    socket.emit(actionType.MESSAGE_SEND_REQUEST, data)
    dispatch(sendMessageRequest)
    }
  }


  const getChatDataSuccess = data => {
    return({
      type: actionType.GET_CHAT_DATA,
      payload: data
    })
  }

  const sendMessageRequest = data => {
  return({
    type: actionType.MESSAGE_SEND_REQUEST
  })
}