import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./slices/userLoginSlice";
import setTimeOutSlice from "./slices/setTimeOutSlice";

export const store = configureStore({
    reducer: {
        UserLogin: userLoginSlice,
        TimeOutID: setTimeOutSlice
    }
})