import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Navbar from './components/mainNavbar/Navbar';
import { useSelector } from "react-redux";
import CreateFolder from "./components/dashboard/navbar/CreateFolder"
import CreateFile from "./components/dashboard/navbar/CreateFile.jsx"
import UploadFile from "./components/dashboard/navbar/UploadFile.jsx";

const RootLayout = () => {
  const createFileState = useSelector((state) => state.OpenOfCreationAndUploadComp.createFile)
  const createFolderState = useSelector((state) => state.OpenOfCreationAndUploadComp.createFolder)
  const uploadState = useSelector((state) => state.OpenOfCreationAndUploadComp.upload)

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen relative">

        {createFileState && <CreateFile createFileState={createFileState} />}
        {createFolderState && <CreateFolder createFolderState={createFolderState} />}
        {uploadState && <UploadFile uploadState={uploadState} />}

        <Navbar />
        <Outlet />

      </div>
    </>
  )
}

export default RootLayout
