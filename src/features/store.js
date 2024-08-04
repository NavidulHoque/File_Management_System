import { configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./slices/userLoginSlice";
import setTimeOutSlice from "./slices/setTimeOutSlice";
import userRegistrationSlice from "./slices/userRegistrationSlice";
import fileFolderSlice from "./slices/fileFolderSlice";
import OpenOfCreationAndUploadCompSlice from "./slices/OpenOfCreationAndUploadCompSlice";

export const store = configureStore({
    reducer: {
        UserLogin: userLoginSlice,
        TimeOutID: setTimeOutSlice,
        UserRegistration: userRegistrationSlice,
        FilesFolders: fileFolderSlice,
        OpenOfCreationAndUploadComp: OpenOfCreationAndUploadCompSlice
    }
})