// src/store/index.ts

import { systemReducer } from "./system/reducers";
import { chatReducer } from "./chat/reducers";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
