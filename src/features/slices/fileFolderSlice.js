import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    currentFolder: "root",
    userFiles: JSON.parse(localStorage.getItem("userFiles")) || [],
    userFolders: JSON.parse(localStorage.getItem("userFolders")) || [],
    adminFiles: JSON.parse(localStorage.getItem("adminFiles")) || [],
    adminFolders: JSON.parse(localStorage.getItem("adminFolders")) || [],
};

const fileFolderSlice = createSlice({
    name: "FilesFolders",
    initialState,
    reducers: {

        addFolder: (state, action) => {
            state.userFolders = [...state.userFolders, action.payload];
            localStorage.setItem("userFolders", state.userFolders);
        },

        addFile: (state, action) => {
            state.userFiles = [...state.userFiles, action.payload];
            localStorage.setItem("userFiles", state.userFiles);
        },
    },
});

export const {addFolder, addFile} = fileFolderSlice.actions
export default fileFolderSlice.reducer
