import { actionType } from '../actions/types'

const initialState = {}
const login = (state = initialState, action) => {
    switch (action.type) {
      case actionType.LOGIN_SUCCESS:
        return {...action.payload}
      case actionType.USER_LOGOUT:
        state.socket.disconnect()
        return {}
      default:
        return state
    }
  }
  
  export default login