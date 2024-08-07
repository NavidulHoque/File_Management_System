import { FaFileUpload } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import Button from "./Button";
import { openCreateFileComp, openCreateFolderComp, openUploadComp } from "../../../features/slices/OpenOfCreationAndUploadCompSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardNavbar = () => {
  const currentFolder = useSelector((state) => state.FilesFolders.currentFolder)
  let traverse = currentFolder
  const folderLists = []
  const userFolders = useSelector((state) => state.FilesFolders.userFolders)
  
  if (currentFolder !== "root") {

    for (let i = 0; i < userFolders.length; i++) {
      const folder = userFolders[i];

      if (folder.folderID === traverse) {
        folderLists.unshift({ name: folder.name, folderID: traverse })
        traverse = folder.parent
        i = -1;
      }

      if (traverse === "root") {
        break
      }
    }
  }

  return (
    <nav className="py-[10px]" aria-label="breadcrumb">

      <div className="flex justify-between w-[90vw] mx-auto">

        <ol className="breadcrumb flex space-x-2">

          <li className="breadcrumb-item">

            {currentFolder !== "root" ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-blue-600 hover:underline"
                >
                  Root
                </Link>

                <span className="mx-2 text-gray-500">/</span>
              </>
            ) : (
              <span className="text-gray-500">Root</span>
            )}

          </li>

          {folderLists?.map((list, index) => (

            <li key={list.folderID} className="breadcrumb-item">

              {folderLists.length - 1 !== index ? (
                <>
                  <Link
                    to={`/dashboard/folder/${list.folderID}`}
                    className="text-blue-600 hover:underline"
                  >{list.name}</Link>

                  <span className="mx-2 text-gray-500">/</span>
                </>
              ) : (
                <span className="text-gray-500">{list.name}</span>
              )}

            </li>

          ))}

        </ol>

        <div className="flex gap-x-3">

          <Button handleOpen={openUploadComp}>
            <FaFileUpload /> Upload File
          </Button>

          <Button handleOpen={openCreateFileComp}>
            <FaFileAlt /> Create File
          </Button>

          <Button handleOpen={openCreateFolderComp}>
            <MdCreateNewFolder /> Create Folder
          </Button>

        </div>

      </div>

    </nav>
  );
};

export default DashboardNavbar;
