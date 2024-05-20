import React from 'react'
import { useNavigate } from 'react-router-dom'
function EducationalDashBoard(props) {
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("loggedIn")
        navigate("/")
    }
  return (
    <div>
        <div>Hello  {(props.educationalData.name)}</div>
        <button onClick={handleLogout} type='button' className='bg-red-400'>Logout</button>
    </div>
  )
}

export default EducationalDashBoard