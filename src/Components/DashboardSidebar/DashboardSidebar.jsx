import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const DashboardSidebar = () => {
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold">Bistro Boss</h2>
                <p>Dashboard</p>
            </div>
            <div className="my-5">
            <ul className="menu p-0 [&_li>*]:rounded-none">
                {
                    isAdmin ? <>
                                    <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
                                    <li><NavLink to="/dashboard/addItems">Add Items</NavLink></li>
                                    <li><NavLink to="/dashboard/manageItems">Manage items</NavLink></li>
                                    <li><NavLink to="/dashboard/manageBooking">Manage bookings</NavLink></li>
                                    <li><NavLink to="/dashboard/allUsers">All users</NavLink></li>

                              </>
                              :
                              <>
                                <li><NavLink to="/dashboard/userHome">User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/payment">Payment</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory">Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/myCart">My Cart</NavLink></li>
                                <li><NavLink to="/dashboard/addReview">Add Review</NavLink></li>
                                <li><NavLink to="myBooking">My Booking</NavLink></li>
                              </>
                }
            </ul>
            </div>
            <div className="border-t-2 border-white py-5">
                <ul className="menu p-0 [&_li>*]:rounded-none">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;