import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Components/DashboardSidebar/DashboardSidebar";


const Dashboard = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-white flex">
            <div className="bg-[#D1A054] min-h-screen w-2/12 p-4">
                <DashboardSidebar></DashboardSidebar>
            </div>
            <div className="w-10/12 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;