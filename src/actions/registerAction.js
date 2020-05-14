import axios from "axios"
import { API_URL } from "../utils/constants"
import { startLoading, stopLoading, alertMessage } from "./commonAction"
import { history } from "../utils/history"

export const registerRequest = data => {
    return dispatch => {
      dispatch(startLoading());
      axios
        .post(`${API_URL}user/register`, data)
        .then(res => {
          console.log("response is then",res)
          dispatch(stopLoading())
          if(res.data.successMessage){
            dispatch(alertMessage(res.data.successMessage,"success"))
            history.push('login')
          }
          else{
            dispatch(alertMessage(res.data.message,"error"))
          }
        })
        .catch(err => {
          console.log("response is catch",err)
          dispatch(stopLoading());
          dispatch(alertMessage(err.message,"error"))
        });
    };
  };
  