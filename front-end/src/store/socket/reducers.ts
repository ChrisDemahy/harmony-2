import {
  SocketActionTypes,
  SocketState,
  SOCKET_CONNECTION_CLOSED,
  SOCKET_CONNECTION_ERROR,
  SOCKET_CONNECTION_INIT,
  SOCKET_CONNECTION_SUCCESS,
  SOCKET_MESSAGE,
} from "./types";

const initialState: SocketState = {
  connected: false,
  readyState: null,
  socket: null,
};

export function chatReducer(
  state = initialState,
  action: SocketActionTypes
): SocketState {
  switch (action.type) {
    // User sends a message
    case SOCKET_CONNECTION_INIT:
      return {
        ...state,
        connected: false,
        socket: action.socket, // TODO action.socket????
      };
    // User Deletes a message
    case SOCKET_CONNECTION_SUCCESS:
      return {
        ...state,
        connected: true,
      };
    //
    case SOCKET_CONNECTION_ERROR:
      // Replaces all messages
      return {
        ...state,
        connected: false,
      };
    case SOCKET_CONNECTION_CLOSED:
      // Replaces all messages
      return {
        ...state,
        connected: false,
        socket: null,
      };
    case SOCKET_MESSAGE:
      // Replaces all messages
      return {
        ...state,
      };
    default:
      return state;
  }
}
