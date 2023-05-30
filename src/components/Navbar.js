import React from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-btn bg-hover-grey">
          <div className="nav-wrap-icon bg-hover-grey">
            <div className="nav-icon-add bg-hover-grey">
              {" "}
              <FaHome />{" "}
            </div>
            <a href="/" className="nav-btn-link bg-hover-grey">
              {" "}
              Home Page{" "}
            </a>{" "}
          </div>
        </div>

        <div className="nav-btn bg-hover-grey">
          <div className="nav-wrap-icon bg-hover-grey">
            <div className="nav-icon-add bg-hover-grey">
              <HiOutlineNewspaper />
            </div>
            <a href="/" className="nav-btn-link bg-hover-grey">
              {" "}
              Potfolio{" "}
            </a>{" "}
          </div>
        </div>
        <div className="nav-btn bg-hover-grey">
          <div className="nav-wrap-icon bg-hover-grey">
            <div className="nav-icon-add bg-hover-grey">
              <BsFillTelephoneFill />
            </div>
            <a href="/" className="nav-btn-link bg-hover-grey">
              {" "}
              Contact Me{" "}
            </a>{" "}
          </div>
        </div>
        {/* <div className="nav-btn"><a href="/" className="nav-btn-link"> Soni </a> </div> */}
      </div>
    </>
  );
}

export default Navbar;
