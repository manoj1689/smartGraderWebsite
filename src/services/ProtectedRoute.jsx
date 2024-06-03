import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import SideBar from './SideBar';
import MobileBar from './MobileBar';

function ProtectedRoute() {
    const auth = localStorage.getItem("loggedIn");
    return auth ? (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="md:hidden fixed top-0 left-0 w-full z-50"> {/* Fixed at the top of the screen on small screens */}
                <MobileBar />
            </div>
            <div className="hidden md:block fixed top-0 left-0 h-full w-1/4 z-30"> {/* Fixed at the top of the screen on medium and larger screens */}
                <SideBar />
            </div>
            <div className="flex-grow mt-16 md:mt-0 md:ml-1/4"> {/* Adjust for the height of the MobileBar and width of the SideBar */}
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/" />
    );
}

export default ProtectedRoute;

