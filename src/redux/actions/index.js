import axios from "axios";
import { LOCAL_OPEN, GET_TABLES } from "./actionTypes";

import {fetchTables,/* updateOpenLocal */} from '../../../restoran';

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

export async function getTables() {
  return{
    type:GET_TABLES,
    payload:await fetchTables()
  }
}