/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import ShowItems from "../../components/dashboard/showCreatedFilesAndFolders/ShowItems"
import { changeCurrentFolder } from "../../features/slices/fileFolderSlice"
import { useEffect } from "react"

const RootFolder = () => {
  const folders = useSelector((state) => state.FilesFolders.userFolders.filter(folder => folder.parent === "root"))
  const files = useSelector((state) => state.FilesFolders.userFiles.filter(file => file.parent === "root"))
  const dispatch = useDispatch()
  // const userFolders = useSelector((state) => state.FilesFolders.userFolders)

  useEffect(() => {
    
    // if (userFolders.length === 0) {
    //   dispatch(fetchFolders())
    // }

    dispatch(changeCurrentFolder("root"))

  
    return () => {
      
    }
  }, [])

  
  
  return (
    <div className="flex flex-col gap-y-6 pt-6">

      {(folders.length === 0 && files.length === 0) && <p className="text-[24px] text-center">This folder is empty</p>}

      {folders.length > 0 && <ShowItems title="Created Folders" items={folders} />}
      {files.length > 0 && <ShowItems title="Created Files" items={files} />}

    </div>
  )
}

export default RootFolder
