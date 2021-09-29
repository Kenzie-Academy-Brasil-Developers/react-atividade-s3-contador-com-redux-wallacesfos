import { ADD_NUMBER, SUBTRACT_NUMBER } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
    switch (action.type) {
  // Aqui você criará os cases do switch!
        case ADD_NUMBER:
            return state + action.number

        case SUBTRACT_NUMBER:
            return state - action.number

        default:
        return state;
    }
  }
  
  export default reducerCounter;