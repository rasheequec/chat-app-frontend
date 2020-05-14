import axios from "axios"
import { API_URL } from "../utils/constants"
import { startLoading, stopLoading, alertMessage } from "./commonAction"
import { history } from "../utils/history"
import { actionType } from "./types"
import { USER_TOKEN, USER_ID } from '../utils/constants'

axios.defaults.headers = {
  'Content-Type': 'application/json',
  'x-auth': localStorage.getItem(USER_TOKEN)
}

export const loginRequest = data => {
    return dispatch => {
      dispatch(startLoading());
      axios
        .post(`${API_URL}user/login`, data)
        .then(res => {
          dispatch(stopLoading())
          if(res.data.token){
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

  export const logoutRequest = () => {
    return dispatch => {
    dispatch(startLoading());
    localStorage.clear()

    axios
    .delete(`${API_URL}user/logout`)
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