import { Outlet } from "react-router-dom"
import DashboardNavbar from "../../components/dashboard/navbar/DashboardNavbar"

const DashboardLayout = () => {
  return (
    <div className="min-h-[85vh] pt-3">

      <DashboardNavbar />
      <Outlet />

    </div>
  )
}

export default DashboardLayout
