// src/store/chat/reducers.ts

import {
  ActionCableActionTypes,
  ActionCableState,
  SPEAK,
  SUBSCRIBE,
  UNSUBSCRIBE,
} from "./types";

const initialState: ActionCableState = {
  subscribed: false,
  currentChannel: "",
};

export function actionCableReducer(
  state = initialState,
  action: ActionCableActionTypes
): ActionCableState {
  switch (action.type) {
    // action cable sends a message
    case SPEAK:
      return {
        ...state,
        subscribed: true,
      };
    case SUBSCRIBE:
      return {
        ...state,
        subscribed: true,
        currentChannel: action.payload,
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        subscribed: false,
        currentChannel: "",
      };
    default:
      return state;
  }
}
