import { actionType } from '../actions/types'

const initialState = {
    ringing: false,
    onCall: false,
    isRoomCreated: false
}
const call = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INITIATE_CALL:
        return{...state, ...action.payload, ringing: true}
        return state
        case actionType.RECEIVE_CALL:
        return {...state, ...action.payload, ringing: true}
        case actionType.ROOM_CREATED:
        return {...state, isRoomCreated: true, onCall: true, ringing: false}
        case actionType.CALL_REJECTED:
        return {...initialState}
      default:
        return state
    }
  }
  
  export default call