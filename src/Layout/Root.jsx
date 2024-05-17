import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import NavBar from "../Components/NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;