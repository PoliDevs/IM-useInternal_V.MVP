import axios from "axios";
import { LOCAL_OPEN_VALUE,GET_ORDERS,LOGIN_ACTION,LOGIN_ACTION_GOOGLE,MENU_ACTIVE,OPEN_LOCAL,CLOSED_LOCAL, GET_ALL_POS } from "./actionTypes";

//nos logueamos
export function loginAction(payload){
return async function (dispatch) {
  try {
    const response = await axios.post("loginemployee/login",payload);
/*     console.log(response.data.token) */
    return dispatch({
      type:LOGIN_ACTION,
      payload:response
    })
  } catch (error) {
    return error
  }
}
};


//loguin Google
export function loginActionGoogle(payload){
  const email={
    googleUser: payload
}
  return async function (dispatch) {
    try {
      const response = await axios.post("loginemployee/loginG",email);
      console.log(response)
      return dispatch({
        type:LOGIN_ACTION_GOOGLE,
        payload:response
      })
    } catch (error) {
      console.error(/* "Error en la acción loginActionGoogle:", */ error);
      return error
    }
  }
  }

//////////////////* Menu Actions *//////////////////
//si hay un menu activo
export function getMenuActive(comerceId){
  return async function (dispatch) {
    try {
      const response = await axios(`menu/lastMenu/${comerceId}`);
      const result=response.data;
      return dispatch({
        type:MENU_ACTIVE,
        payload:result
      })
    } catch (error) {
      return error
    }
  }
}


export function postMenu(menu,comercio, id) {
  return async function (dispatch, getState) {
    try {
      id = getState().comerceId;
      if (id){
        const response = await axios.post(
          `/menu/menuUp/${id}`,
          { commerceJSON: comercio, menuJSON: menu }
        );
      }else {
        const response = await axios.post(
          `/menu/menuUp/0`,
          { commerceJSON: comercio, menuJSON: menu }
        );
      }
    } catch (error) {
      return error;
    }
  };
}


//si el local esta abierto
export function localOpen(comerceId) {
  return async function (dispatch) {
    try {
      const response = await axios(`commerce/openCommerce/${comerceId}`)
      const result=response.data
      return dispatch({
        type:LOCAL_OPEN_VALUE,
        payload:result
      })
    } catch (error) {
      return error
    }
  }
  }


//abrimos local
export function openLocal(comerceId) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/commerce/open/${comerceId}`)
      if(response.status===200){
        return dispatch({
          type:OPEN_LOCAL,
          payload:true
        })
      }
    } catch (error) {
      return error
    }
  }
  }
//cerramos local
export function closedLocal(comerceId) {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/commerce/close/${comerceId}`)
      if(response.status===200){
        return dispatch({
          type:CLOSED_LOCAL,
          payload:false
        })
      }
    } catch (error) {
      return error
    }
  }
  }




export async function getOrders() {
  return async function (dispatch) {
    try {
      const response = await axios.get("order/all");
      return dispatch({
        type:GET_ORDERS,
        payload:response.data
      })
    } catch (error) {
      return error
    }
  }
}

//? Devuelve array con todos los sectores del comercio, dentro de los sectores se encuentran los Pos
//? Esta accion se debe ejecutar en un useEffect del componente QrGenerator.
export function getAllPos(id){
  return async function (dispatch){
    try {
      let response = await axios.get(`http://localhost:3001/pos/all/${id}`);
      let allPos = response.data[0].sectors;
      return dispatch({
        type: GET_ALL_POS,
        payload: allPos
      })
    } catch (error) {
      console.error(error)
    }
  }
}