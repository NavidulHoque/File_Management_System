import DashboardHome from '../../components/dashboard/home/DashboardHome';
import DashboardNavbar from './../../components/dashboard/navbar/DashboardNavbar';

const Dashboard = () => {
  return (
    <div className="min-h-[85vh] pt-3">

      <DashboardNavbar />
      <DashboardHome />

    </div>
  )
}

export default Dashboard
