import { GET_ORDERS, LOGIN_ACTION,LOGIN_ACTION_GOOGLE,MENU_ACTIVE,LOCAL_OPEN_VALUE,OPEN_LOCAL,CLOSED_LOCAL, GET_ALL_POS } from "../actions/actionTypes";
import jwtDecode from "jwt-decode";

const initalState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  usuario: "",
  localOpenValue:null,
  id: 1,
  local: true,
  orders: [],
  sales: "",
  menuActive:localStorage.getItem("menuActivo")
  ? localStorage.getItem("menuActivo")
  : [],
  allPos: []
};

export const rootReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    //loguin 
    case LOGIN_ACTION: {
      const data = jwtDecode(payload.data.token);
      const user = {
        token: payload.data.token,
        email: data.email,
        id: data.id,
        comerceId: data.commerceId,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
      };
      // Guardar el token y la información del usuario en localStorage
      localStorage.setItem("token", JSON.stringify(payload.data.token));
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        user,
      };
    };

    //loginGoogle
    case LOGIN_ACTION_GOOGLE: {
      const data = jwtDecode(payload.data.token);
      const user = {
        token: payload.data.token,
        id: data.id,
        name:data.name,
        phone: data.phone,
        email: data.email,
        comerceId: data.commerceId,
      };
      // Guardar el token y la información del usuario en localStorage
      localStorage.setItem("token", JSON.stringify(payload.data.token));
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        user,
      };
    };

    //para oreguntar menu activo
    case MENU_ACTIVE:{
      return {
        ...state,
        menuActive:payload
      };
    };

    //local cerrado o abierto
    case LOCAL_OPEN_VALUE:{
      console.log(payload)
      return{
        ...state,
        localOpenValue:payload
      }
    };

    //abrimos local
    case OPEN_LOCAL:{
      return{
        ...state,
        localOpenValue:payload
      }

    }

    //ceramos local
    case CLOSED_LOCAL:{
      return{
        ...state,
        localOpenValue:payload
      }
    }


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

    case GET_ALL_POS:
      return {...state, allPos: payload}
    default:
      return state;
  }
};

export default rootReducer;
