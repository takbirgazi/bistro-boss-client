import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import loginBg from "../../assets/images/loginBg.png";
import loginImg from "../../assets/images/loginImg.png";
import { useContext, useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub, FaCheck } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate =  useNavigate();
    const from = location.state?.pathname || "/";
    const { createUser, upadteUser, user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[]);

    const googleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
            .then(() => {
                const userInfo = {
                    email: user.email,
                    name: user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res);
                })
            navigate(from, {replace:true});
            swal("Log In Successful!");
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const singnUpHndler = (event)=>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const user = {name,email}
            createUser(email, password)
                .then(() => {
                    axiosPublic.post('/users', user)
                        .then(res => [
                        console.log(res)
                    ])
                upadteUser(name);
                navigate(from, {replace:true});
                swal("Registration Successful!");
            })
            .catch(err => console.log(err))
    }

    const checkCaptcha = (event)=>{
        event.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false);
        }else{
            setDisable(true);
        }
    }

    return (
        <div className={`bg-[url('./assets/images/loginBg.png')] min-h-screen flex items-center justify-center`}>
            <Helmet>
            <title>Log In - Bistro Boss</title>
           </Helmet>
            <div className="my-10">
                <div className="hero w-11/12 mx-auto border rounded-md shadow-xl bg-opacity-15">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left lg:w-1/2 w-full">
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="card lg:w-1/2 w-full  shadow-2xl bg-base-100 ">
                            <h2 className="font-bold text-xl text-center mt-10 ">Sign Up Now</h2>
                            <form onSubmit={singnUpHndler} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <div className="border rounded-lg mb-2 px-4 py-2">
                                        <LoadCanvasTemplate />
                                    </div>
                                    <div className="flex gap-1">
                                        <input ref={captchaRef} name="captcha" type="text" placeholder="Type here" className="input input-bordered w-5/6" required />
                                        <button onClick={checkCaptcha} className="input input-bordered w-1/6 flex items-center justify-center"><FaCheck /></button>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                <input type="submit" name="submit" disabled={disable} className="btn btn-primary" value="Register" />
                                </div>
                            </form>
                            <div>
                                <div className="text-center text-yellow-600">Already registered? <NavLink to="/login" className="cursor-pointer">Go to log in</NavLink></div>
                                <div className="text-center my-4">Or sign up with</div>
                                <div className="flex gap-5 justify-center items-center mb-10">
                                    <div className="border rounded-full p-3 cursor-pointer">
                                        <FaFacebookF className="text-xl"/>
                                    </div>
                                    <div onClick={googleSignIn} className="border rounded-full p-3">
                                        <FaGoogle className="text-xl"/>
                                    </div>
                                    <div className="border rounded-full p-3">
                                        <FaGithub className="text-xl"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;