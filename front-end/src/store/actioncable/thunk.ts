// src/thunks.ts

import { Action } from "redux";
// import { sendMessage } from "./store/chat/actions";
import { RootState } from "../../store";
import { ThunkAction } from "redux-thunk";

import { thunkSendSocket } from "../socket/thunk";

export const thunkSubscribe = (
  channelName: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  console.info(`Subscribing to channel: ${channelName} ....`);

  dispatch(thunkSendMessage("subscribe", { channelName }));
};

export const thunkUnSubscribe = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  const { actionCable } = getState();
  const channelName = actionCable.currentChannel;

  console.info(`UnSubscribing from channel: ${channelName} ....`);
  dispatch(thunkSendMessage("unsubscribe", { channelName }));
};

export const thunkSendMessage = (
  command: string,
  identifier: object
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState
) => {
  const { actionCable } = getState();
  console.info(`Sending message to Action Cable ....`);

  // Specific Structure
  // command: The action we want to perform
  // identifier: Indentify the channel class we want to send the message to
  const message: object = {
    command: command,
    identifier: JSON.stringify({ identifier }),
  };
  const jsonData = JSON.stringify(message);
  dispatch(thunkSendSocket(jsonData));
};
