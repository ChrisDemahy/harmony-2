// src/store/index.ts

import { systemReducer } from "./system/reducers";
import { chatReducer } from "./chat/reducers";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { SystemState } from "./system/types";
import { ChatState } from "./chat/types";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
