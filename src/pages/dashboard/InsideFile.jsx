import FilePageNavbar from "../../components/dashboard/navbar/FilePageNavbar"
import CodeEditor from "../../components/dashboard/editor/CodeEditor"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"

const InsideFile = () => {
  const { fileID } = useParams()
  const file = useSelector(state => state.FilesFolders.userFiles.find(file => file.fileID === fileID))
  const [fileData, setFileData] = useState(file.data)

  return (
    <>
      <ToastContainer />
      <div className="min-h-[85vh]">

        <FilePageNavbar fileData={fileData} />

        <CodeEditor fileData={fileData} setFileData={setFileData} />

      </div>
    </>
  )
}

export default InsideFile
