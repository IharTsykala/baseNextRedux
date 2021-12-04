import {
  createStore,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const store = createStore(
  reducers,
  composeWithDevTools({ trace: true, traceLimit: 25 })(applyMiddleware())
)

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export interface Action<T> {
  type: string;
  payload?: T;
}

export default store