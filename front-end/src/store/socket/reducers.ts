import { SocketState } from "./types";

const initialState: SocketState = {
  connected: false,
  readyState: null,
  socket: null,
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): SocketState {
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
