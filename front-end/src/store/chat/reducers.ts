// src/store/chat/reducers.ts

import {
  ChatState,
  ChatActionTypes,
  NEW_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGES,
  UPDATE_CHATROOM,
} from "./types";

const initialState: ChatState = {
  messages: [],
  id: 0,
  name: "",
  created_at: "",
  updated_at: "",
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    // User sends a message
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    // User Deletes a message
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload.id
        ),
      };
    //
    case UPDATE_MESSAGES:
      // Replaces all messages
      return {
        ...state,
        messages: [...action.payload],
      };
    case UPDATE_CHATROOM:
      // Replaces all messages
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
