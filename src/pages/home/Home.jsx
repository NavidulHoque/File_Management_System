import { useDispatch, useSelector } from "react-redux"
import { removeID } from "../../features/slices/setTimeOutSlice"

const Home = () => {
  const timeOutID = useSelector((state) => state.TimeOutID.timeOutID)
  const dispatch = useDispatch()

  clearTimeout(timeOutID)

  dispatch(removeID())
  
  return (
    <div className="sm:h-[88vh] h-[80vh] bg-[#3498db] text-white flex justify-center items-center">

      <p className="w-[85vw] mx-auto text-[40px] font-semibold text-center">Welcome to File Management System</p>

    </div>
  )
}

export default Home
