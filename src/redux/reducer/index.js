import {
  CLEAR_STATE,
  GET_ORDERS,
  LOGIN_ACTION,
  LOGIN_ACTION_GOOGLE,
  MENU_ACTIVE,
  LOCAL_OPEN_VALUE,
  OPEN_LOCAL,
  CLOSED_LOCAL,
  UPDATE_USER_INTERNAL,
  GET_ALL_POS,
  SET_MENU_CHANGES,
  CLEAR_MENU_CHANGES,
} from '../actions/actionTypes';
import jwtDecode from 'jwt-decode';

const initialState = {
  user_internal: localStorage.getItem('user_internal')
    ? JSON.parse(localStorage.getItem('user_internal'))
    : {},
  usuario: '',
  localOpenValue: localStorage.getItem('localOpenValue')
    ? JSON.parse(localStorage.getItem('localOpenValue'))
    : null,
  id: 1,
  local: true,
  orders: [],
  menuActive: localStorage.getItem('menuActivo')
    ? localStorage.getItem('menuActivo')
    : [],
  allPos: [],
  changes: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Restablece el estado a los valores iniciales
    case CLEAR_STATE:
      return {
        ...state,
        user_internal: {},
        menuActive: [],
      };

    //loguin
    case LOGIN_ACTION: {
      const data = jwtDecode(payload.data.token);
      const user_internal = {
        token: payload.data.token,
        email: data.email,
        id: data.id,
        comerceId: data.commerceId,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
      };
      localStorage.setItem('token', JSON.stringify(payload.data.token));
      localStorage.setItem('user_internal', JSON.stringify(user_internal));
      return {
        ...state,
        user_internal,
      };
    }

    //loginGoogle
    case LOGIN_ACTION_GOOGLE: {
      const data = jwtDecode(payload.data.token);
      const user_internal = {
        token: payload.data.token,
        id: data.id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        comerceId: data.commerceId,
        commercialPlan: data['commerce.commercialPlan.id'],
        commerceName: data['commerce.name'],
      };
      localStorage.setItem('token', JSON.stringify(payload.data.token));
      localStorage.setItem('user_internal', JSON.stringify(user_internal));
      localStorage.setItem('isAllowedInstructions', true);

      return {
        ...state,
        user_internal,
      };
    }

    //para preguntar menu activo
    case MENU_ACTIVE:
      return {
        ...state,
        menuActive: payload,
      };

    //local cerrado o abierto
    case LOCAL_OPEN_VALUE: {
      const localOpenValue = payload;
      localStorage.setItem('localOpenValue', JSON.stringify(localOpenValue));
      return {
        ...state,
        localOpenValue,
      };
    }

    //abrimos local
    case OPEN_LOCAL:
      return {
        ...state,
        localOpenValue: payload,
      };

    //cerramos local
    case CLOSED_LOCAL:
      return {
        ...state,
        localOpenValue: payload,
      };

    // Actualizar el estado user_internal con los nuevos datos
    case UPDATE_USER_INTERNAL:
      return {
        ...state,
        user_internal: payload,
      };

    //busca todas las ordenes
    case GET_ORDERS:
      const arrayOrders = payload.slice(0, payload.length - 1);
      return {
        ...state,
        orders: arrayOrders,
      };

    case GET_ALL_POS:
      return { ...state, allPos: payload };

    case SET_MENU_CHANGES:
      return {
        ...state,
        changes: [...state.changes, payload],
      };

    case CLEAR_MENU_CHANGES:
      return {
        ...state,
        changes: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
