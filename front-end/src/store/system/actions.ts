// src/store/system/actions.ts

import {
  SystemState,
  UPDATE_USERNAME,
  SystemActionTypes,
  UPDATE_LOGIN,
} from "./types";

export function updateUsername(newUsername: string): SystemActionTypes {
  return {
    type: UPDATE_USERNAME,
    payload: newUsername,
  };
}

export function updateLogin(status: boolean): SystemActionTypes {
  return {
    type: UPDATE_LOGIN,
    payload: status,
  };
}
