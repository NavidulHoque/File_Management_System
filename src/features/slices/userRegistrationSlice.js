import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: JSON.parse(localStorage.getItem("email")) || []
}

const userRegistrationSlice = createSlice({
    name: "UserRegistration",
    initialState,
    reducers: {
        register: (state, action) => {
           state.email = [...state.email, action.payload]
           localStorage.setItem("email", JSON.stringify(state.email))
        }
    }
})

export const { register } = userRegistrationSlice.actions
export default userRegistrationSlice.reducer