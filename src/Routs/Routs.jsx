import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Menues from "../Pages/Menues/Menues";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import OurShop from "../Pages/OurShop/OurShop";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/Admin/DashboardHome/DashboardHome";
import AddItems from "../Pages/Dashboard/Admin/AddItems/AddItems";
import MyCart from "../Pages/Dashboard/User/MyCart/MyCart";
import UserHome from "../Pages/Dashboard/User/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/User/Reservation/Reservation";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/Dashboard/User/AddReview/AddReview";
import MyBooking from "../Pages/Dashboard/User/MyBooking/MyBooking";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import Payment from "../Pages/Dashboard/User/Payment/Payment";
// import PrivateRoute from './PrivateRoute';

const route = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <div>Home Error Element</div>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menues></Menues>
            },
            {
                path: 'shop',
                element: <OurShop></OurShop>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <div>Dashboard Error Element</div>,
        children: [
            // Admin Routes
            {
                path: 'adminHome',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'addItems',
                element: <AddItems></AddItems>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            // User Routes
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "addReview",
                element: <AddReview></AddReview>
            },
            {
                path: 'myBooking',
                element: <MyBooking></MyBooking>
            }
        ]
    }

])

export default route;