import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import SideBar from './SideBar';
import MobileBar from './MobileBar';

function ProtectedRoute() {
    const auth = localStorage.getItem("loggedIn");
    return auth ? (
        <div className="flex min-h-screen">
            <div className="md:hidden"> {/* Hide on md and above */}
                <MobileBar />
            </div>
            <div className="hidden md:block"> {/* Show only on md and above */}
                <SideBar />
            </div>
            <div className="flex-grow sm:ml-10 mt-16">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/" />
    );
}

export default ProtectedRoute;
