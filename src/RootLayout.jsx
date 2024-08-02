import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen">

        <Navbar />
        <Outlet />

      </div>
    </>
  )
}

export default RootLayout
