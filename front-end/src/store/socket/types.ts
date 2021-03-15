// src/store/socket/types.ts

export interface SocketState {
  connected: boolean;
  readyState: any;
  socket: any;
}

// Action types
export const SOCKET_CONNECTION_INIT = "SOCKET_CONNECTION_INIT";
export const SOCKET_CONNECTION_SUCCESS = "SOCKET_CONNECTION_SUCCESS";
export const SOCKET_CONNECTION_ERROR = "SOCKET_CONNECTION_ERROR";
export const SOCKET_CONNECTION_CLOSED = "SOCKET_CONNECTION_CLOSED";
export const SOCKET_MESSAGE = "SOCKET_MESSAGE";

// Chat Action Constants & Shape:

// Initiate Socket Connection
interface SocketInitAction {
  type: typeof SOCKET_CONNECTION_INIT;
  // payload: SocketState;
  socket: any;
}
// Socket connection is successful
interface SocketSuccessAction {
  type: typeof SOCKET_CONNECTION_SUCCESS;
  // payload: SocketState;
}
// Socket connection has an error
interface SocketErrorAction {
  type: typeof SOCKET_CONNECTION_ERROR;
  // payload: SocketState;
}

// Socket connection is closed
interface SocketClosedAction {
  type: typeof SOCKET_CONNECTION_CLOSED;
  // payload: SocketState;
}

// Socket connection is closed
interface SocketMessageAction {
  type: typeof SOCKET_MESSAGE;
  payload: any;
}

// Typescript union type to express all actions
export type SocketActionTypes =
  | SocketInitAction
  | SocketSuccessAction
  | SocketErrorAction
  | SocketClosedAction
  | SocketMessageAction;
