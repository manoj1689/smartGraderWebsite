import React,{useEffect,useState} from 'react'
import UserDashBoard from './userDashBoard/UserDashBoard'
import EducationalDashBoard from './educationalDashBoard/EducationalDashBoard'
import OrganizationDashBorad from './organizationDashBoard/OrganizationDashBorad'

function Dashboard() {
const [dashboardKey,setDashBoardKey]=useState(null)
const [individualData,setIndividualData]=useState();
const [organizationData,setOrganizationData]=useState();
const [educationalData,setEducationalData]=useState()
    useEffect(() => {
        // Retrieve access token from local storage
        const accessToken = localStorage.getItem("accessToken");
    
        // Make sure accessToken is not null or undefined
        if (accessToken) {
          // Fetch user data using access token
          fetch("https://api.smartgrader.in/users/me?jwt=" + accessToken, {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
            if (data.user_type ==="U"){
                setIndividualData(data)
            }else if(data.user_type ==="O"){
                setOrganizationData(data)
            }else if(data.user_type==="I") {
                setEducationalData(data)
            }
              setDashBoardKey(data.user_type)
            })
            .catch((error) => {
              console.error("Error fetching user data:", error);
            });
        } else {
          console.error("Access token not found in local storage");
        }
      }, []);
  return (
    <div>{ dashboardKey==="U" &&  <UserDashBoard individualData={individualData} />
        }
       { dashboardKey==="O" && <OrganizationDashBorad  organizationData={organizationData} />
        }
         { dashboardKey==="I" && <EducationalDashBoard educationalData={educationalData}/>
        }
        
     
    </div>
  )
}

export default Dashboard