import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { Home, Business, Article, PersonAdd, LocationOn } from "@mui/icons-material";
import logo from "../constants/logos/finalpng.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Navbar = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleDropdownOpen = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
      <a style={{padding : "0rem"}} href="/"><img src={logo} alt="Logo" className="logo" /></a>
        <div className="tab">
          <a href="/" className={`tab ${currentPath === "/" ? "active" : ""}`}>
            <Home className="icon" />
            Home
          </a>
        </div>
        <div className="tab" onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}>
          <a className={`tab ${(currentPath === "/esg-consulting" || currentPath === "/accounting-reporting-consulting") ? "active" : (showDropdown ? "mouseon" : "")}`}>
            <Business className="icon" />
            Services
          </a>
          {showDropdown && (
            <div className="dropdown-menu">
              <a href="/accounting-reporting-consulting" className="dropdown-tab">
                <ArrowForwardIosIcon className="arrow" />
                Accounting & Reporting Consulting
              </a>
              <a href="/esg-consulting" className="dropdown-tab">
                <ArrowForwardIosIcon className="arrow" />
                ESG Consulting
              </a>
            </div>
          )}
        </div>
        <div className="tab">
          <a href="/news-and-views" className={`tab ${currentPath === "/news-and-views" ? "active" : ""}`}>
            <Article className="icon" />
            News & Views
          </a>
        </div>
        <div className="tab">
          <a href="/join-us" className={`tab ${currentPath === "/join-us" ? "active" : ""}`}>
            <PersonAdd className="icon" />
            Join Us
          </a>
        </div>
        <div className="tab">
        <a href="/location" className={`tab ${currentPath === "/location" ? "active" : ""}`}>
          <LocationOn className="icon" />
          Location
        </a>
      </div>
    </div>
  );
};

export default Navbar;
