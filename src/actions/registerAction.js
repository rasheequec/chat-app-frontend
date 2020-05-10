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
          dispatch(stopLoading())
          dispatch(alertMessage("You have successfully registered. Please login to continue","success"))
          history.push('login')
        })
        .catch(err => {
          dispatch(stopLoading());
          dispatch(alertMessage((err.response && err.response.data) ? err.response.data.errorMsg: "", "error"))
        });
    };
  };
  