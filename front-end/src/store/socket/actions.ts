import {
  SocketActionTypes,
  SocketState,
  SOCKET_CONNECTION_CLOSED,
  SOCKET_CONNECTION_ERROR,
  SOCKET_CONNECTION_INIT,
  SOCKET_CONNECTION_SUCCESS,
  SOCKET_MESSAGE,
} from "./types";

// TypeScript infers that this function is returning SocketInitAction
export function initSocket(socket: any): SocketActionTypes {
  return {
    type: SOCKET_CONNECTION_INIT,
    // payload: previousState,
    socket: socket,
  };
}

// TypeScript infers that this function is returning SocketSuccessAction
export function socketSuccess(): SocketActionTypes {
  return {
    type: SOCKET_CONNECTION_SUCCESS,
    // payload: previousState,
  };
}

// TypeScript infers that this function is returning SocketErrorAction
export function socketError(): SocketActionTypes {
  return {
    type: SOCKET_CONNECTION_ERROR,
    // payload: previousState,
  };
}

// TypeScript infers that this function is returning SocketClosedAction
export function socketClosed(): SocketActionTypes {
  return {
    type: SOCKET_CONNECTION_CLOSED,
    // payload: previousState,
  };
}

// TypeScript infers that this function is returning SocketMessageAction
export function socketMessage(message: any): SocketActionTypes {
  return {
    type: SOCKET_MESSAGE,
    payload: message,
  };
}
