import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import SideBar from './SideBar';
import MobileBar from './MobileBar';

function ProtectedRoute() {
    const auth = localStorage.getItem("loggedIn");
    return auth ? (
        <div >
            <div className="lg:hidden "> {/* Hide on md and above */}
                <MobileBar />
            </div>
            <div className="hidden lg:block"> {/* Show only on lg and above */}
                <SideBar />
            </div>
            <div className="flex-grow w-1/2">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/" />
    );
}

export default ProtectedRoute;
