/* eslint-disable react/prop-types */
import { FaFolder } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShowItem = ({item, title}) => {
  const navigate = useNavigate()

  function handleRedirect() {
    
    if (title === "Created Folders") {
      navigate(`/dashboard/folder/${item.folderID}`)
    }
    else{
      navigate(`/dashboard/file/${item.fileID}`)
    }
  }

  return (
    <div onDoubleClick={handleRedirect} className="flex flex-col gap-y-2 items-center border-[1px] border-[rgb(0,0,0,0.2)] py-[20px] px-[60px] rounded-md cursor-pointer hover:bg-blue-200">
       
       {title === "Created Folders" ? <FaFolder className="text-[70px]" /> : <FaFileAlt className="text-[70px]" />}

       <span>{item.name}</span>

    </div>
  )
}

export default ShowItem
