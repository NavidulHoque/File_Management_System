/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { closeCreateFileComp } from "../../../features/slices/OpenOfCreationAndUploadCompSlice";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { BeatLoader } from "react-spinners";
import collectionFiles from './../../../functions/collectionFiles';
import { addDoc } from "firebase/firestore";
import { validFileExtensions } from './../../../extensions/extensions';
import { addFile } from "../../../features/slices/fileFolderSlice";

const CreateFile = ({ createFileState }) => {
  const { currentFolder, userFiles } = useSelector((state) => state.FilesFolders)
  const user = useSelector((state) => state.UserLogin.user)
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const validExtensions = validFileExtensions
  const extensionExists = fileName.split(".").length > 1
  const extension = fileName.split(".")[1]

  async function handleAddFile() {

    if (userFiles.find(file => file.name === (extensionExists ? fileName : fileName.concat(".txt")) && file.parent === currentFolder)) {

      toast.error("File already exists, please enter another name", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      })
    }

    //checks if the extension is valid or not
    else if (!validExtensions.includes(extension) && extensionExists) {

      toast.error("File extension invalid, please enter a valid file extension", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      })
    }

    else if (fileName.length > 3) {

      const fileInfo = {
        name: extensionExists ? fileName : fileName.concat(".txt"),
        extension: extensionExists ? extension : "txt",
        parent: currentFolder,
        userID: user.id,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        lastAccessed: null,
        createdBy: user.displayName,
        path: currentFolder === "root" ? [] : [currentFolder],
        data: "",
        url: null,
      }

      try {
        setLoading(true)
        const docRef = await addDoc(collectionFiles(), fileInfo)
        fileInfo.fileID = docRef.id
        
        dispatch(addFile(fileInfo))

        toast.success("File created", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        })

        setLoading(false)
      }

      catch (error) {

        toast.error("File creation failed, please try again", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        })

        setLoading(false)
      }

    }

    else if (fileName.length <= 3 && fileName.length > 0) {

      toast.error("File name should be greater than 3 characters", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      })
    }

    else if (!fileName) {

      toast.error("Please enter a file name", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      })
    }
  }

  return (
    <>
      <ToastContainer />
      <div
        className={`fixed w-full top-0 left-0 h-screen justify-center bg-[rgba(0,0,0,0.4)] pt-10 ${createFileState ? "flex z-10" : "hidden -z-10"
          }`}
      >
        <div className="basis-[400px] h-[180px] rounded-md bg-white flex flex-col gap-y-5 relative p-[15px]">

          <RxCross2
            onClick={() => dispatch(closeCreateFileComp())}
            className="absolute right-[10px] top-[10px] cursor-pointer"
          />

          <h1 className="text-[22px]">Create File</h1>

          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="File name Eg: index, index.txt, index.html etc"
            className="border-black outline-none border-[2px] rounded-md px-[5px] py-[3px]"
            autoFocus
          />

          <button 
            onClick={handleAddFile} 
            className="bg-[#3498db] hover:bg-[#2980b9] text-white rounded-md py-[5px] w-[100px]"
            disabled={loading}
          >
              {loading ? <BeatLoader color="#fff" size={5} /> : "Create File"}
          </button>

        </div>

      </div>
    </>
  );
};

export default CreateFile;
