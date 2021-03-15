// src/thunks.ts

import { Action } from "redux";
// import { sendMessage } from "./store/chat/actions";
import { RootState } from "./store";
import { ThunkAction } from "redux-thunk";
import {
  initSocket,
  socketClosed,
  socketError,
  socketMessage,
  socketSuccess,
} from "./store/socket/actions";

export const thunkInitSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  console.log("Starting socket connection....");
  const socket = new WebSocket("ws://localhost:3000/cable");
  dispatch(initSocket(socket));

  socket.onopen = function () {
    dispatch(socketSuccess());
    // dispatch(thunkSubscribeSocket());
  };

  socket.onerror = function () {
    dispatch(socketError());
  };

  socket.onmessage = function (event) {
    dispatch(socketMessage(event.data));
  };

  socket.onclose = function () {
    dispatch(socketClosed());
  };
};

export const thunkSubscribeSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  const { socket } = getState(); //get socket
  const message = {
    command: "subscribe",
    indentifier: JSON.stringify({ channel: "ChatChannel" }),
  };
  socket.socket.send(JSON.stringify(message));
};
