import { Action } from "../store";
import {ActionTypes} from "./actions";
import {getLogInUserStatus} from "../../services/reduxServices/securityReducerServices/securityReducerServices";

export interface State {
  logInUserStatus: boolean;
}

const initialState: State = {
  logInUserStatus: false
}

export const securityReducer = (state: State = initialState, action: Action<never>) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, logInStatus: getLogInUserStatus(true)}
    case ActionTypes.LOGOUT_USER:
      return { ...state, logInStatus: getLogInUserStatus(false)}
    default:
      return state
  }
}

