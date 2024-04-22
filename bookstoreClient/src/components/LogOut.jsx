import React, {useContext, useState} from "react";
import {AuthContext} from "../contacts/AuthorisationProvider.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const LogOut = ()=>{
    const [error, setError] = useState("error");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {logOut}= useContext(AuthContext)
    const  handleLogout =()=>{
        logOut().then(()=>{
            alert('Sign out successfully!')
            navigate(from, {replace:true})

        }).catch((error)=>{

        })
    }
    return(
        <div className='h-screen bg-yellow-400 flex items-center justify-center flex-col'>
            <h1 className='text-5xl font-bold leading-snug text-blackflex flex flex-col items-center mt-5 text-green-800'>Are you sure you want to logout?</h1><br/>
            <button className=' bg-red-800 px-10 py-4 text-white rounded' onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default LogOut