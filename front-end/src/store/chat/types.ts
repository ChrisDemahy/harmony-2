// src/store/chat/types.ts

export interface Message {
  id: number;
  content: string;
  user_id: number;
  chatroom_id: number;
  created_at?: string;
  updated_at?: string;
}

export interface ChatroomDetails {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ChatState {
  messages: Message[];
  chatRooms: ChatroomDetails[];
  currentChatroom: ChatroomDetails;
}
// Chat Action Constants & Shape:

export const NEW_MESSAGE = "NEW_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const SET_MESSAGES = "SET_MESSAGES";
export const UPDATE_CHATROOM = "UPDATE_CHATROOM";
export const SET_CHATROOMS = "SET_CHATROOMS";

// user sends a message
// (dispatched from thunk function or sockets callback)
interface NewMessageAction {
  type: typeof NEW_MESSAGE;
  payload: Message;
}

// User deletes a message
interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  payload: Message;
}

// User enters a new chatroom, replace all the messages
interface SetMessagesAction {
  type: typeof SET_MESSAGES;
  payload: Message[];
}

// User changes to a new chatroom
interface UpdateChatroomAction {
  type: typeof UPDATE_CHATROOM;
  payload: ChatroomDetails;
}

// Load in all available chatrooms
interface SetChatroomsAction {
  type: typeof SET_CHATROOMS;
  payload: ChatroomDetails[];
}

// Typescript union type to express all actions
export type ChatActionTypes =
  | NewMessageAction
  | DeleteMessageAction
  | SetMessagesAction
  | UpdateChatroomAction
  | SetChatroomsAction;
