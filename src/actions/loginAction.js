import axios from "axios"
import { API_URL, SOCKET_URL } from "../utils/constants"
import { startLoading, stopLoading, alertMessage } from "./commonAction"
import { history } from "../utils/history"
import { actionType } from "./types"
import { USER_TOKEN, USER_ID } from '../utils/constants'
import io from "socket.io-client";

export const loginRequest = data => {
    return dispatch => {
      dispatch(startLoading());
      axios
        .post(`${API_URL}user/login`, data)
        .then(res => {
          dispatch(stopLoading())
          if(res.data.token){
            const socket = io(SOCKET_URL);
            socket.on('connect', function () {
              console.log("socket connected")
              socket.emit('join', {userid: res.data.id});
            });
            res.data.socket = socket;
            dispatch(loginSuccess(res.data))
            localStorage.setItem(USER_TOKEN, res.data.token)
            localStorage.setItem(USER_ID, res.data.id)
            history.push('/')
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

  export const initiateSocket = socket => {
    return dispatch => {
      dispatch(initSocket({socket}));
    }
  }
  export const logoutRequest = () => {
    const headers = {
      Authorization: localStorage.getItem(USER_TOKEN)
    };
    return dispatch => {
    dispatch(startLoading());
    localStorage.clear()

    axios
    .delete(`${API_URL}user/logout`,{headers})
    .then(res => {
      dispatch(stopLoading())
      dispatch(logoutSuccess)
      dispatch(alertMessage(res.data.message,"success"))
    })
    .catch(err => {
      dispatch(stopLoading());
      dispatch(alertMessage(err.message, "error"))
    });
  }
  }

  const loginSuccess = data => {
    return({
      type: actionType.LOGIN_SUCCESS,
      payload: {...data}
    })
  }

  const logoutSuccess = () => {
    return({
      type: actionType.USER_LOGOUT
    })
  }

  const initSocket = (payload) => {
    return({
      type: actionType.INIT_SOCKET,
      payload
    })
  }