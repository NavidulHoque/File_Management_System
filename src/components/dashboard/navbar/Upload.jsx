/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { closeUploadComp } from "../../../features/slices/OpenOfCreationAndUploadCompSlice";
import { useState } from "react";

const Upload = ({uploadState} ) => {
    const [upload, setUpload] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed w-full top-0 left-0 h-screen justify-center bg-[rgba(0,0,0,0.4)] pt-10 ${
        uploadState ? "flex z-10" : "hidden -z-10"
      }`}
    >
      <div className="basis-[400px] h-[180px] rounded-md bg-white flex flex-col gap-y-5 relative p-[15px]">
        
        <RxCross2
          onClick={() => dispatch(closeUploadComp())}
          className="absolute right-[10px] top-[10px] cursor-pointer"
        />

        <h1 className="text-[22px]">Upload Anything</h1>

        <input
          type="text"
          value={upload}
          onChange={(e) => setUpload(e.target.value)}
          className="border-black outline-none border-[2px] rounded-md px-[5px] py-[3px]"
          autoFocus
        />

        <button className="bg-[#3498db] hover:bg-[#2980b9] text-white rounded-md py-[5px] w-[100px]">Upload</button>

      </div>

    </div>
  )
}

export default Upload
