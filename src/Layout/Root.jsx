import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import NavBar from "../Components/NavBar/NavBar";

const Root = () => {
    const location = useLocation();
    const loginPage = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className="max-w-screen-xl mx-auto bg-white">
            {loginPage || <NavBar></NavBar>}
            <div>
                <Outlet></Outlet>
            </div>
            {loginPage || <Footer></Footer>}
        </div>
    );
};

export default Root;