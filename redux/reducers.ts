import { combineReducers } from 'redux'
import {pagesReducer} from "./page/reducer";
import {securityReducer} from "./security/reducer";

const reducers = {
  pages: pagesReducer,
  security: securityReducer
}

export default combineReducers(reducers)