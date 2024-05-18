import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navList = <>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/menu'>Our Menu</NavLink></li>
                        <li><NavLink to='/login'>Log In</NavLink></li>
                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                    </>
    return (
        <div className="navbar border-b fixed z-10 bg-white bg-opacity-55">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navList}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;