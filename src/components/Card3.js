import React from "react";
// import imgCard2 from "../assets/gsoc.png";
// import imgCard2 from "../assets/gsoc.png";

function Card3() {
  return (
    <>
      <div className="nav tp ">
        <div className="nav-btn manage-margin-card">
          <a href="/" className="nav-btn-link small-lnk">
            Frontend @ YogLabs
          </a>
        </div>
      </div>
      {/* <div className="heading">My Blogs</div> */}

      <div className="card2 three-bg">
        {/* <div className="card2-img">
          <img className="hp2-card2-img" src={imgCard2} alt="" />
        </div> */}
        <div className="card2-text three-bg">
          <div className="card2-text-heading three-bg">
            Tor’s SnowFlake: Revitalising Snowflake's Landing Page for a Better
            User Experience
          </div>
          <div className="card2-text-content three-bg three-bg-a" >
            Project Aims to re-code The Snowflake's Landing page! <br />
            <br />
            <a
              href="https://summerofcode.withgoogle.com/programs/2023/projects/zQRvTgia"
              target="__blank"
              className=""
            >
              Link to Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card3;
