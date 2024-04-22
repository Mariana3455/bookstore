import React from "react";
import {Outlet} from "react-router-dom";
import MySideBar from "./MySideBar.jsx";

const DashboardLayout = ({ children }) => {
    return (
        <div  className='flex gap-4 flex-col md:flex-row'>
            <MySideBar/>
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout