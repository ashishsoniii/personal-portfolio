import { motion } from "framer-motion";
import React from "react";
// import imgCard2 from "../assets/gsoc.png";
// import imgCard2 from "../assets/gsoc.png";

function Card3() {
  return (
    <>
      <div className="nav tp ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Initial state of the component
          animate={{ opacity: 1, scale: 1 }} // Animation to be applied
          transition={{ duration: 0.3 }} // Transition configuration
          whileHover={{ scale: 1.1 }} // Animation on hover
          className="nav-btn manage-margin-card"
        >
          <a href="/" className="nav-btn-link small-lnk">
            Frontend @ YogLabs
          </a>
        </motion.div>
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
          <div className="card2-text-content three-bg three-bg-a">
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
