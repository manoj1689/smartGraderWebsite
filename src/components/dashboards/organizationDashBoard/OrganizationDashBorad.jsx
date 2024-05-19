import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrganizationDashBorad(props) {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("loggedIn")
        navigate("/")
    }
  return (
    <div>
        <div>welcome {props.organizationData.name}</div>
        <button onClick={handleLogout} type='button' className='bg-red-400'>Logout</button>
    </div>
  )
}


export default OrganizationDashBorad