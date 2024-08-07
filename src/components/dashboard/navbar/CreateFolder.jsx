/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { closeCreateFolderComp } from "../../../features/slices/OpenOfCreationAndUploadCompSlice";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { addFolder } from "../../../features/slices/fileFolderSlice";
import { addDoc } from "firebase/firestore";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import collectionFolders from "./../../../functions/collectionFolders";

const CreateFolder = ({ createFolderState }) => {
  const { currentFolder, userFolders } = useSelector(
    (state) => state.FilesFolders
  );
  const user = useSelector((state) => state.UserLogin.user);
  const [folderName, setFolderName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { folderID } = useParams();

  async function handleAddFolder() {
    if (userFolders.find((folder) => folder.name === folderName && folder.parent === currentFolder)) {

      toast.error("Folder already exists, please enter another name", {
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
    
    else if (folderName.length > 3) {
      const data = {
        name: folderName,
        parent: currentFolder,
        userID: user.id,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        lastAccessed: null,
        createdBy: user.displayName,
        path: currentFolder === "root" ? [] : [folderID],
      };

      try {
        setLoading(true);
        const docRef = await addDoc(collectionFolders(), data);
        data.folderID = docRef.id;
        console.log(data);

        dispatch(addFolder(data));

        toast.success("Folder created", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        setLoading(false);
      } 
      
      catch (error) {
        toast.error("Folder creation failed, please try again", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        setLoading(false);
      }
    } 

    else if (folderName.length <= 3 && folderName.length > 0) {
      toast.error("Folder name should be greater than 3 characters", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

    } 
    
    else if (!folderName) {
      toast.error("Please enter a folder name", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div
        className={`fixed w-full top-0 left-0 h-screen justify-center bg-[rgba(0,0,0,0.4)] pt-10 ${
          createFolderState ? "flex z-10" : "hidden -z-10"
        }`}
      >
        <div className="basis-[400px] h-[180px] rounded-md bg-white flex flex-col gap-y-5 relative p-[15px]">
          <RxCross2
            onClick={() => dispatch(closeCreateFolderComp())}
            className="absolute right-[10px] top-[10px] cursor-pointer"
          />

          <h1 className="text-[22px]">Create Folder</h1>

          <input
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            placeholder="Folder name"
            className="border-black outline-none border-[2px] rounded-md px-[5px] py-[3px]"
            autoFocus
          />

          <button
            onClick={handleAddFolder}
            className="bg-[#3498db] hover:bg-[#2980b9] text-white rounded-md py-[5px] w-[120px]"
            disabled={loading}
          >
            {loading ? <BeatLoader color="#fff" size={5} /> : "Create Folder"}
          </button>

        </div>

      </div>
    </>
  );
};

export default CreateFolder;
