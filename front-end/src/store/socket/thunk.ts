// src/thunks.ts

import { Action } from "redux";
// import { sendMessage } from "./store/chat/actions";
import { RootState } from "..";
import { ThunkAction } from "redux-thunk";
import {
  initSocket,
  socketClosed,
  socketError,
  socketSuccess,
} from "./actions";

export const thunkInitSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  console.info("Starting socket connection....");
  const socket = new WebSocket("ws://localhost:3000/cable");

  socket.onopen = (event) => {
    console.log(`event:`);
    console.dir(event);
    dispatch(socketSuccess());
  };

  socket.onmessage = (event) => {
    const serverResponse = JSON.parse(event.data);
    if (serverResponse.type !== "ping") {
      console.log(`serverResponse:`);
      console.dir(serverResponse);
      // dispatch(socketMessage(message: ))
    }
  };

  socket.onerror = function () {
    dispatch(socketError());
  };

  socket.onclose = function () {
    dispatch(socketClosed());
  };
  dispatch(initSocket(socket));
};

export const thunkSendSocket = (
  jsonStringifiedData: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  console.info("Sending socket data....");
  const { socket } = getState();
  const ws = socket.socket;

  ws.send(jsonStringifiedData);
};
