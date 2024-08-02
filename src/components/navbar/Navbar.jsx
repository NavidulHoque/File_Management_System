import { Link } from "react-router-dom"

const Navbar = () => {
  
  return (
    <nav className="bg-black text-white h-[20vh] sm:h-[12vh]">

      <div className="w-[90vw] mx-auto flex sm:flex-row flex-col items-center justify-center sm:justify-between h-full gap-y-3">

        <h1 className="font-semibold text-[24px]">File Management System</h1>

        <div className="flex gap-x-3"> 

          <Link to='/login' className="rounded-md p-[10px] bg-[#9b59b6] hover:bg-[#8e44ad]">Login</Link>

          <Link to="/registration" className="rounded-md p-[10px] bg-[#1abc9c] hover:bg-[#16a085]">Register</Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
