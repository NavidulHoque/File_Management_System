import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null
}

const userLoginSlice = createSlice({
    name: "UserLogin",
    initialState,
    reducers:{
        LogIn: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(state.user))
            localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn))
        },

        LogOut: (state) => {
            state.isLoggedIn = false
            state.user = null
            localStorage.setItem("user", JSON.stringify(state.user))
            localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn))
        }
    }
})

export const { LogIn, LogOut } = userLoginSlice.actions
export default userLoginSlice.reducer