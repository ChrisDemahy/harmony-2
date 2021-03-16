// src/store/chat/actions.ts

import {
  Message,
  NEW_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes,
  SET_MESSAGES,
  ChatroomDetails,
  UPDATE_CHATROOM,
  SET_CHATROOMS,
} from "./types";

// TypeScript infers that this function is returning SendMessageAction
export function newMessage(newMessage: Message): ChatActionTypes {
  return {
    type: NEW_MESSAGE,
    payload: newMessage,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(oldMessage: Message): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    payload: oldMessage,
  };
}

// TypeScript infers that this function is returning SetMessagesAction
export function setMessages(newMessages: Message[]): ChatActionTypes {
  return {
    type: SET_MESSAGES,
    payload: newMessages,
  };
}

// TypeScript infers that this function is returning SetMessagesAction
export function updateChatroom(newChatroom: ChatroomDetails): ChatActionTypes {
  return {
    type: UPDATE_CHATROOM,
    payload: newChatroom,
  };
}

// TypeScript infers that this function is returning SetMessagesAction
export function setChatrooms(newChatrooms: ChatroomDetails[]): ChatActionTypes {
  return {
    type: SET_CHATROOMS,
    payload: newChatrooms,
  };
}
