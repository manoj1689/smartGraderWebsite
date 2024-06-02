import React from 'react'
import { useNavigate } from 'react-router-dom';
import Visitor_landing from './Visitor/Visitor_landing';
function EducationalDashBoard(props) {
    // const navigate=useNavigate()
    // const handleLogout=()=>{
    //     localStorage.removeItem("loggedIn")
    //     navigate("/")
    // }
  return (
    <div>
 
        <Visitor_landing/>
    
    </div>
  )
}

export default EducationalDashBoard