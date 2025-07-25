import React, {useContext} from "react";
import {AuthContext} from "../contacts/AuthorisationProvider.jsx";
import {Navigate, useLocation} from "react-router-dom";
import {Spinner} from "flowbite-react";

const PrivateRoute = ({children})=>{
    const {user, loading} = useContext(AuthContext);
    const location= useLocation()
    if (loading){
        return <div className='text-center'>
            <Spinner aria-label="Center-aligned"/>
        </div>
    }

        if (user){
            return  children;
        }

    return(
        <div>
        <Navigate to="/login" state={{from:location}} replace/>
        <div>PrivateRoute</div>
        </div>
    )
}
export default PrivateRoute