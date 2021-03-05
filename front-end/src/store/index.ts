// src/store/index.ts

import { systemReducer } from "./system/reducers";
import { chatReducer } from "./chat/reducers";
import { combineReducers, createStore } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
