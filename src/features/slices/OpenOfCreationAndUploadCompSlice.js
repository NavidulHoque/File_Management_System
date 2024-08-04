import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    upload: false,
    createFile: false,
    createFolder: false
}

const OpenOfCreationAndUploadCompSlice = createSlice({
    name: "OpenOfCreationAndUploadComp",
    initialState,
    reducers: {

        openUploadComp: (state) => {
            state.upload = true
        },

        closeUploadComp: (state) => {
            state.upload = false
        },

        openCreateFileComp: (state) => {
            state.createFile = true
        },

        closeCreateFileComp: (state) => {
            state.createFile = false
        },

        openCreateFolderComp: (state) => {
            state.createFolder = true
        },

        closeCreateFolderComp: (state) => {
            state.createFolder = false
        },

    }
})

export const { openUploadComp, closeUploadComp, openCreateFileComp, closeCreateFileComp, openCreateFolderComp, closeCreateFolderComp } = OpenOfCreationAndUploadCompSlice.actions
export default OpenOfCreationAndUploadCompSlice.reducer