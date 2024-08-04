import { FaFileUpload } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import Button from "./Button";
import { openCreateFileComp, openCreateFolderComp, openUploadComp } from "../../../features/slices/OpenOfCreationAndUploadCompSlice";

const DashboardNavbar = () => {
  return (
    <nav className="py-[10px]">

        <div className="flex justify-between w-[90vw] mx-auto">

            <p>Root</p>

            <div className="flex gap-x-3">

                <Button handleOpen={openUploadComp}><FaFileUpload /> Upload</Button>

                <Button handleOpen={openCreateFileComp} ><FaFileAlt /> Create File</Button>

                <Button handleOpen={openCreateFolderComp}><MdCreateNewFolder />  Create Folder</Button>

            </div>
            
        </div>
      
    </nav>
  )
}

export default DashboardNavbar
