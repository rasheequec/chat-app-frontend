import { USER_TOKEN, USER_ID } from './constants'

const IsLogin = () => {
    if (localStorage.getItem(USER_TOKEN) && localStorage.getItem(USER_ID)) {
      return true;
    } else {
      return false
    }
  };
  
  export default IsLogin