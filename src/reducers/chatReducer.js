import { actionType } from '../actions/types'

const initialState = {chatData: []}
const chat = (state = initialState, action) => {
    switch (action.type) {
      case actionType.GET_CHAT_DATA:
        return {...state, chatData: action.payload}
      case actionType.USER_LOGOUT:
        return {}
      default:
        return state
    }
  }
  
  export default chat