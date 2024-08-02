import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user2")) || null
}

const userRegistrationSlice = createSlice({
    name: "UserRegistration",
    initialState,
    reducers: {
        register: (state, action) => {
           state.user = action.payload
           localStorage.setItem("user2", JSON.stringify(state.user))
        }
    }
})

export const { register } = userRegistrationSlice.actions
export default userRegistrationSlice.reducer