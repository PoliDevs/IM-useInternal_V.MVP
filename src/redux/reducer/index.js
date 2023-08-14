import { LOCAL_OPEN } from "../actions/actionTypes";
const initalState = {
  local:false
};

export const  rootReducer = (state= initalState, action) => {
  switch (action.type) {
    case LOCAL_OPEN:
      return{
        ...state,
        local:action.payload
      }
      
      break;
  
    default:
      return state;
  }
}

export default rootReducer;