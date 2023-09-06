import { LOCAL_OPEN, GET_ORDERS, LOGIN_ACTION } from "../actions/actionTypes";
import jwtDecode from "jwt-decode";
const initalState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  usuario: "",
  id: 1,
  local: true,
  orders: [],
  sales: "",
};

export const rootReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case LOGIN_ACTION: {
      const data = jwtDecode(payload.data.token);
      // Guardar el token en localStorage
      localStorage.setItem("token", JSON.stringify(payload.data.token));
      // Guardar la información del usuario en localStorage
      localStorage.setItem("user", JSON.stringify(data));
      return {
        user:{
          token:payload.data.token,
        }
      };
    }
    //para abrir y cerrar local
    case LOCAL_OPEN:
      return {
        ...state,
        local: payload,
      };
    //busca todas las ordenes
    case GET_ORDERS:
      //esta linea solo es para forkear
      const arrayOrders = payload.slice(0, payload.length - 1);
      //
      return {
        ...state,
        orders: arrayOrders,
      };
      break;
    default:
      return state;
  }
};

export default rootReducer;
