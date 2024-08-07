import { createSlice } from "@reduxjs/toolkit";
import { query, getDocs } from "firebase/firestore";
import collectionFolders from './../../functions/collectionFolders';

const initialState = {
    currentFolder: JSON.parse(localStorage.getItem("currentFolder")) || "root",
    userFiles: JSON.parse(localStorage.getItem("userFiles")) || [],
    userFolders: JSON.parse(localStorage.getItem("userFolders")) || [],
    adminFiles: JSON.parse(localStorage.getItem("adminFiles")) || [],
    adminFolders: JSON.parse(localStorage.getItem("adminFolders")) || [],
}

const fileFolderSlice = createSlice({
    name: "FilesFolders",
    initialState,
    reducers: {

        addFolder: (state, action) => {
            state.userFolders = [...state.userFolders, action.payload];
            localStorage.setItem("userFolders", JSON.stringify(state.userFolders));
        },

        fetchFolders: async (state) => {

            const q = query(collectionFolders())
            const querySnapshot = await getDocs(q)
            const folders = []
            let data = ''

            querySnapshot.forEach((doc) => {

                data = doc.data()
                data.folderID = doc.id
                folders.push(data)

                console.log(doc.id, " => ", doc.data())
            })
            state.userFolders = folders
            localStorage.setItem("userFolders", JSON.stringify(state.userFolders))
        },

        addFile: (state, action) => {
            state.userFiles = [...state.userFiles, action.payload];
            localStorage.setItem("userFiles", JSON.stringify(state.userFiles));
        },

        updateFileData: (state, action) => {
            state.userFiles = state.userFiles.map(file => {
                if (file.fileID === action.payload.file.fileID) {
                    file.data = action.payload.fileData
                    return file
                }
                else{
                    return file
                }
            })
            localStorage.setItem("userFiles", JSON.stringify(state.userFiles))
        },

        changeCurrentFolder: (state, action) => {
            state.currentFolder = action.payload
            localStorage.setItem("currentFolder", JSON.stringify(state.currentFolder))
        }
    },
});

export const { addFolder, addFile, changeCurrentFolder, fetchFolders, updateFileData } = fileFolderSlice.actions
export default fileFolderSlice.reducer
