// src/thunks.ts

import { Action } from "redux";
// import { sendMessage } from "./store/chat/actions";
import { RootState } from "./store";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { setChatrooms, setMessages } from "./store/chat/actions";

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
