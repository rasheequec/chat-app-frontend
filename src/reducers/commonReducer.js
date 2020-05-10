import { actionType } from "../actions/types"

const initialState = {isLoading: false}

const common = (state = initialState, action) => {
    switch (action.type) {
    case actionType.ALERT_MESSAGE:
        console.log({...state, ...action.payload})
        return {...state, ...action.payload}

    case actionType.START_LOADING:
        return {...state, isLoading: true}
        
    case actionType.STOP_LOADING:
        return {...state, isLoading: false}
    
    case actionType.CLEAR_ALERT_MESSAGE:
        return {isLoading: false}

      default:
        return state
    }
  }
  
  export default common