import { LOCAL_OPEN,GET_TABLES } from "../actions/actionTypes";
const initalState = {
  id:1,
  local:false,
  tables:[]
};

export const  rootReducer = (state= initalState, {type,payload}) => {
  switch (type) {
    case LOCAL_OPEN:
      return{
        ...state,
        local:payload
      };
    case GET_TABLES:
      return{
        ...state,
        tables:payload
      }
      break;
    default:
      return state;
  }
}

export default rootReducer;