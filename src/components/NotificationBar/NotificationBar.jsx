import React,{useEffect,useState} from 'react'
import { FaBell } from "react-icons/fa";

function NotificationBar() {
 const [username,setUsername]=useState()
  useEffect(() => {
    // Retrieve access token from local storage
    const accessToken = localStorage.getItem("accessToken");

    // Make sure accessToken is not null or undefined
    if (accessToken) {
      // Fetch user data using access token
      fetch("http://34.131.249.177:8000/users/me?jwt=" + accessToken, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.is_verified === 1 ){
            setUsername(data.name)
          }
        } )
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      console.error("Access token not found in local storage");
    }
  }, []);
  return (
    <div> <div className="flex gap-5 my-16 mb-10 justify-between">
    <div className="flex flex-col lg:flex-row gap-5 px-5">
      <div className="flex text-gray-500">
        <span className="block text-base md:text-xl lg:text-2xl xl:text-3xl">
          Hello!
        </span>
        {"  "}
        <span className="block text-base md:text-xl lg:text-2xl xl:text-3xl pl-1 md:pl-3 text-sky-500">
         {username}
        </span>
      </div>
      <div className="flex-auto my-auto text-sm sm:text-base md:text-lg font-light leading-4 text-neutral-500">
        Here's the current status for today!
      </div>
    </div>

    <div className="max-lg:hidden">
      <FaBell size={30} color="#01AFF4" />
    </div>
  </div></div>
  )
}

export default NotificationBar