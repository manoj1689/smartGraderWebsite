import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import SideBar from './SideBar'
function ProtectedRoute() {
    const auth=localStorage.getItem("loggedIn")
  return auth ? <>   <div className="flex min-h-screen">
  <div  >
    <SideBar />
  </div>
  <div className="flex-grow">
    <Outlet />
  </div>
</div></> :<Navigate to={'/'}/>
}

export default ProtectedRoute