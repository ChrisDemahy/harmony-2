// src/store/system/types.ts

export interface SystemState {
  loggedIn: boolean;
  userName: string;
}

// Chat Action Constants & Shape:
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_LOGIN = "UPDATE_LOGIN";

interface UpdateUsernameAction {
  type: typeof UPDATE_USERNAME;
  payload: string;
}
interface UpdateLoginAction {
  type: typeof UPDATE_LOGIN;
  payload: boolean;
}

export type SystemActionTypes = UpdateUsernameAction | UpdateLoginAction;
