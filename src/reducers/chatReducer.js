import { actionType } from '../actions/types'

const initialState = {chatData: []}
const chat = (state = initialState, action) => {
    switch (action.type) {
      case actionType.GET_CHAT_DATA:
        return {...state, chatData: action.payload}
      case actionType.MESSAGE_SEND_REQUEST:
        const findId = (element) => element.id == action.payload.receiverId
        let index = state.chatData.findIndex(findId)
        let newData = state.chatData;
        newData[index].messages.push(action.payload)
        return {...state, chatData: [...newData]}
      case actionType.RECEIVE_MESSAGE:
        const findChatId = (element) => element.chatId == action.payload.chatId
        let chatIndex = state.chatData.findIndex(findChatId)
        let newData2 = state.chatData;
        newData2[chatIndex].messages.push(action.payload.message)
        return {...state, chatData: [...newData2]}
      case actionType.USER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  export default chat