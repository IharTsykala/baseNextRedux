import {Action} from "../store";

export const ActionTypes = {
  LOGIN_USER: "[SECURITY] login user",
  LOGOUT_USER: "[SECURITY] logout user"
}

export const incrementIndexPage = (): Action<never> => ({
  type: ActionTypes.LOGIN_USER,
})

export const decrementIndexPage = (): Action<never> => ({
  type: ActionTypes.LOGOUT_USER,
})