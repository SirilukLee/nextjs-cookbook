import { Dispatch, configureStore , ThunkAction, combineReducers} from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./authSlice";
import { createWrapper } from "next-redux-wrapper";
import authSlice from "./authSlice";
import { LoginService } from "../api/core/login.service";
import articleReduce from "./articleSlice"
//import { createWrapper } from './articleSlice'
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


export const store: any = configureStore({
    reducer: rootReducer,
    devTools: true
});



const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<AppStore>(makeStore)
