// src/store/chat/types.ts

export interface MessageContent {
  content: string;
  user_id: number;
  chatroom_id: number;
}

type channelName = string;

export interface ActionCableState {
  subscribed: boolean;
  currentChannel: channelName;
}
// Chat Action Constants & Shape:

export const SUBSCRIBE = "SUBSCRIBE";
export const UNSUBSCRIBE = "UNSUBSCRIBE";
export const SPEAK = "SPEAK";

// Subscribe to action cable channel
// payload is channel name
interface SubscribeAction {
  type: typeof SUBSCRIBE;
  payload: channelName;
}
interface UnSubscribeAction {
  type: typeof UNSUBSCRIBE;
}
// send speak action to actioncable
interface SpeakAction {
  type: typeof SPEAK;
  payload: MessageContent;
}

// Typescript union type to express all actions
export type ActionCableActionTypes =
  | SubscribeAction
  | UnSubscribeAction
  | SpeakAction;
