import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from '.';

export type Auth = {
    state: boolean;
    token: string | null
    userProperties: Array<string>
}

export type AuthState = {
    auth: Auth
}

export type selectAuth = {
    state: boolean
}


export const INITIAL_STATE: AuthState = {
    auth: {
        state: false,
        token: null,
        userProperties: []
    },

}


export const authSlice = createSlice({
    name: "auth",
    reducers: {
        changeAuthState: (state: AuthState, action: PayloadAction<Auth>) => {
            const newAuth = action.payload;
            state.auth = newAuth
            //console.log(state.auth)

        },

    },
    initialState: INITIAL_STATE
})



export default authSlice.reducer
export const { changeAuthState } = authSlice.actions;

export const selectAuthState = (state: AuthState) => {
    const authData = state.auth
    return state.auth;
}
