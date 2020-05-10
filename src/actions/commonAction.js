import { actionType } from "./types"

export const startLoading = () => ({
    type: actionType.START_LOADING
})

export const stopLoading = () => ({
    type: actionType.STOP_LOADING
})

export const alertMessage = (alertMessage, messageType) => ({
    type: actionType.ALERT_MESSAGE,
    payload: {
        alertMessage: (messageType == "error" && !alertMessage) ? "Something went wrong, please try again": alertMessage,
        messageType
    }
  });

export const clearAlertMessage = () => ({
    type: actionType.CLEAR_ALERT_MESSAGE
})