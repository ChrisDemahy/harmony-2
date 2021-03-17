// src/store/chat/reducers.ts

import {
  ChatState,
  ChatActionTypes,
  NEW_MESSAGE,
  DELETE_MESSAGE,
  SET_MESSAGES,
  UPDATE_CHATROOM,
  SET_CHATROOMS,
} from "./types";

const initialState: ChatState = {
  messages: [],
  chatRooms: [],
  currentChatroom: { id: 0, name: "", created_at: "", updated_at: "" },
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
    case SET_MESSAGES:
      // Replaces all messages
      return {
        ...state,
        messages: [...action.payload],
      };
    case SET_CHATROOMS:
      // Replaces all messages
      return {
        ...state,
        chatRooms: [...action.payload],
      };
    case UPDATE_CHATROOM:
      // Updates current Chatroom
      return {
        ...state,
        currentChatroom: action.payload,
      };
    default:
      return state;
  }
}
