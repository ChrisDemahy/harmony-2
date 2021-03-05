// src/store/system/reducers.ts

import {
  SystemState,
  SystemActionTypes,
  UPDATE_USERNAME,
  UPDATE_LOGIN,
} from "./types";

const initialState: SystemState = {
  loggedIn: false,
  userName: "",
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return {
        ...state,
        userName: action.payload,
      };
    }
    case UPDATE_LOGIN: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    default:
      return state;
  }
}
