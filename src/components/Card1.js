import React from "react";
import imgCard1 from "../assets/gsoc.png";

function Card1() {
  return (
    <>
      <div className="nav tp ">
        <div className="nav-btn manage-margin-card">
          <a href="/" className="nav-btn-link small-lnk">
            Google Summer Of Code @ The Tor Project
          </a>
        </div>
      </div>
      {/* <div className="heading">My Blogs</div> */}

      <div className="card1">
        <div className="card1-img">
          <img className="hp2-card1-img" src={imgCard1} alt="" />
        </div>
        <div className="card1-text">
          <div className="card1-text-heading">
            Tor’s SnowFlake: Revitalising Snowflake's Landing Page for a Better
            User Experience
          </div>
          <div className="card1-text-content">
            Project Aims to re-code The Snowflake's Landing page! <br />
            <br />
            <a
              href="https://summerofcode.withgoogle.com/programs/2023/projects/zQRvTgia"
              target="__blank"
            >
              Link to Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
