import { PayloadAction, createSlice, ThunkAction, createSelector } from "@reduxjs/toolkit"
//import { RootState } from "@reduxjs/toolkit/query";
import { defaultTypeResolver } from "graphql";
import { RootState } from "./index"
import { AppState } from "./index";

export type Auth = {
    isLoggedIn: boolean;
    token: string | null
    userProperties: Array<string>
}

export type AuthState = {
    auth: Auth
}

export type selectAuth = {
    isLoggedIn: boolean
}

// export type selectAuthState = {
//     selectAuth: SelectAuth
// }

export const INITIAL_STATE: AuthState = {
    auth: {
        isLoggedIn: false,
        token: null,
        userProperties: []
    },

}

// export const INITIAL_SELECT_AUTH_STATE: selectAuthState = {
//     selectAuth: {
//         isLoggedIn: false
//     }
// }

export const authSlice = createSlice({
    name: "auth",
    reducers: {
        changeAuthState: (state: AuthState, action: PayloadAction<Auth>) => {
            const newAuth = action.payload;
            state.auth = newAuth

        },

    },
    initialState: INITIAL_STATE
})

export default authSlice.reducer
export const { changeAuthState } = authSlice.actions;
export const selectAuthState = createSelector(
    (state: AppState) => state.auth.auth.isLoggedIn,
    (isLoggedIn) => isLoggedIn
  );