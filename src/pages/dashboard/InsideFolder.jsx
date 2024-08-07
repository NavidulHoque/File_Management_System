/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { changeCurrentFolder } from "../../features/slices/fileFolderSlice"
import { useEffect } from "react"
import ShowItems from "../../components/dashboard/showCreatedFilesAndFolders/ShowItems"

const InsideFolder = () => {
  const { folderID } = useParams()
  const dispatch = useDispatch()
  const folders = useSelector((state) => state.FilesFolders.userFolders.filter(folder => folder.parent === folderID))
  const files = useSelector((state) => state.FilesFolders.userFiles.filter(file => file.parent === folderID))

  useEffect(() => {
    dispatch(changeCurrentFolder(folderID))
  
    return () => {
      
    }
  }, [folderID])
  
  return (
    <div className="flex flex-col gap-y-6 pt-6">

      {(folders.length === 0 && files.length === 0) && <p className="text-[24px] text-center">This folder is empty</p>}

      {folders.length > 0 && <ShowItems title="Created Folders" items={folders} />}
      {files.length > 0 && <ShowItems title="Created Files" items={files} />}

    </div>
  )
}

export default InsideFolder
