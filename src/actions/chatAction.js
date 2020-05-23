import axios from "axios"
import { API_URL } from "../utils/constants"
import { startLoading, stopLoading, alertMessage } from "./commonAction"
import { history } from "../utils/history"
import { actionType } from "./types"
import { USER_TOKEN, USER_ID } from '../utils/constants'

export const getChatData = data => {
  const headers = {
    Authorization: localStorage.getItem(USER_TOKEN)
  };
    return dispatch => {
      dispatch(startLoading());
      axios
        .get(`${API_URL}chat/userlist`, {headers})
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


  const getChatDataSuccess = data => {
    return({
      type: actionType.GET_CHAT_DATA,
      payload: data
    })
  }