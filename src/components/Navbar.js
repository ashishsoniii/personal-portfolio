import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-btn"><a href="/" className="nav-btn-link"> Home Page </a> </div>
        <div className="nav-btn"><a href="/" className="nav-btn-link"> Potfolio </a> </div>
        <div className="nav-btn"><a href="/" className="nav-btn-link"> Contact Me </a> </div>
        {/* <div className="nav-btn"><a href="/" className="nav-btn-link"> Soni </a> </div> */}
      </div>
    </>
  );
}

export default Navbar;
