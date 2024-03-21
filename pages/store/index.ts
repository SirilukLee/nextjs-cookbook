import { Dispatch, configureStore , ThunkAction, combineReducers} from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import authSlice from "./authSlice";
import { LoginService } from "../api/core/login.service";
import articleReduce from "./articleSlice"

/* const apiCallMiddleWare = (store: RootState) =>
(next: Dispatch<RootState>) =>
(action: { type: string, payload: {save:boolean}}) => {
    console.log("action", {store, action});
    LoginService.getInstance().anyAPICall();
    next(action);
} */
const rootReducer :any= combineReducers({
    auth: authReducer,
    article: articleReduce
  });


export const store = configureStore({
    reducer: rootReducer,
    devTools: true
});



const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<RootState>(makeStore)
