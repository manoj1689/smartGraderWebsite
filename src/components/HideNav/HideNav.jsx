import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function HideNav({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const Location = useLocation();

  useEffect(() => {
    // console.log('This is Location',Location)
    if (
      Location.pathname === "/" ||
      Location.pathname === "/works" ||
      Location.pathname === "/pricing" ||
      Location.pathname === "/partners" ||
      Location.pathname === "/FAQ" ||
      Location.pathname === "contactUs"
    ) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [Location]);
  return <div>{showNavbar && children}</div>;
}

export default HideNav;
