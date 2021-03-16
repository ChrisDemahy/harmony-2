// src/store/chat/actions.ts

import {
  ActionCableActionTypes,
  SUBSCRIBE,
  UNSUBSCRIBE,
  SPEAK,
  MessageContent,
} from "./types";

// TypeScript infers that this function is returning SendMessageAction
export function subscribe(channelName: string): ActionCableActionTypes {
  return {
    type: SUBSCRIBE,
    payload: channelName,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function unSubscribe(): ActionCableActionTypes {
  return {
    type: UNSUBSCRIBE,
  };
}

// TypeScript infers that this function is returning SendMessageAction
export function speak(newMessage: MessageContent): ActionCableActionTypes {
  return {
    type: SPEAK,
    payload: newMessage,
  };
}
