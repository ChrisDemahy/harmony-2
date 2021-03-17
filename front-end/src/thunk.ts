// src/thunks.ts

import { Action } from "redux";
// import { sendMessage } from "./store/chat/actions";
import { RootState } from "./store";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import {
  setChatrooms,
  setMessages,
  updateChatroom,
} from "./store/chat/actions";
import { batch } from "react-redux";
import { thunkInitSocket } from "./store/socket/thunk";

export const thunkSetup = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  batch(() => {
    dispatch(thunkInitSocket());
    dispatch(thunkGetChatrooms());
  });
};

export const thunkGetChatrooms = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  console.info("Fetching all chatrooms....");

  const { data } = await axios.get("http://localhost:3000/chatrooms");

  dispatch(setChatrooms(data));
};

export const thunkGetChatroom = (
  chatroomId: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  console.info(`Fetching chatroom ${chatroomId}....`);

  const { data } = await axios.get(
    `http://localhost:3000/chatrooms/${chatroomId}`
  );

  dispatch(updateChatroom(data));
};

export const thunkGetMessages = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  console.info("Fetching all messages....");

  const { data } = await axios.get("http://localhost:3000/messages");

  dispatch(setMessages(data));
};
