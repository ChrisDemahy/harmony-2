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
  const socket = new WebSocket("ws://foo.com");
  dispatch(initSocket(socket));

  socket.onopen = function () {
    dispatch(socketSuccess());
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
