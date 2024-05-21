import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate(); 
    const [allCarts] = useCart();

    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            navigate('/login');
        })
        .catch(err => console.log(err));
    }
    const navList = <>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/menu'>Our Menu</NavLink></li>
                        <li><NavLink to='/shop'>Our Shop</NavLink></li>
                        {
                            user ? <>
                                        <li><NavLink to='/'> 
                                        <button className="flex gap-1">
                                            Cart
                                            <div className="badge badge-secondary">+{allCarts.length}</div>
                                        </button>
                                        </NavLink></li>
                                        <button className="px-2 py-1" onClick={logOut}>Log Out</button>
                                    </>
                                    :
                                    <>
                                        <li><NavLink to="/signup">Sign Up</NavLink></li>
                                        <li><NavLink to='/login'>Log In</NavLink></li>
                                    </>

                        }
                    </>
    return (
        <div className="navbar border-b fixed z-10 bg-white bg-opacity-55 px-5">
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