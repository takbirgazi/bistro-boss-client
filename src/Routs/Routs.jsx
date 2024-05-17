import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Menues from "../Pages/Menues/Menues";

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
            }
        ]
    }

])

export default route;