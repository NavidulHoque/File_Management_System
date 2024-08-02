import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null
}

const userLoginSlice = createSlice({
    name: "UserLogin",
    initialState,
    reducers:{
        LogIn: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },

        LogOut: (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export const { LogIn, LogOut } = userLoginSlice.actions
export default userLoginSlice.reducer