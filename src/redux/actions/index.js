import axios from "axios";
import { LOCAL_OPEN,GET_ORDERS,LOGIN_ACTION } from "./actionTypes";

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
}

export function localAction(value) {
/*     return {
      type: LOCAL_OPEN,
      payload:await updateOpenLocal(value),
    }; */
    return {
      type: LOCAL_OPEN,
      payload:value,
    };
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