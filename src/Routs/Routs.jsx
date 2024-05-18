import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Menues from "../Pages/Menues/Menues";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const route = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <div>error</div>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menues></Menues>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            }
        ]
    }

])

export default route;