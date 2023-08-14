import axios from "axios";
import { LOCAL_OPEN } from "./actionTypes";

export function localAction(value) {
    return {
      type: LOCAL_OPEN,
      payload: value,
    };
  }