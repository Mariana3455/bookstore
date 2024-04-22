import gLogo from "../assets/bookCoversForBannerCard/google.jpg";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../contacts/AuthorisationProvider.jsx';
import { GoogleAuthProvider } from "firebase/auth";
const Login = ()=>{
    const { login ,loginGoogle } = useContext(AuthContext);
    const [error, setError] = useState("error");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password).then((userCredentials)=>{
            const user = userCredentials.user;
            alert("Login successfully!")
            navigate(from, {replace:true})
        })

    };
    const  handleRegister = (event) => {
        loginGoogle().then((result) => {
            const user = result.user;
            alert("Sign Up successfully!")
            navigate(from, {replace:true})
        })

    }
    return(
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='w-full sm:max-w-lg'>
                <section className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
                    <div className="p-6 space-y-4">
                        <h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white text-center">
                            Login
                        </h1>
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <button type="submit" className="w-full bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                Do not have an account? <Link to="/signUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</Link>
                            </p>
                        </form>
                    </div>

                </section>
            </div>
        </div>
    )
}
export default Login