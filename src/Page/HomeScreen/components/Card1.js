import React from "react";
import imgCard1 from "../../../assets/gsoc.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Card1() {
  return (
    <>
      <div className="nav tp ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Initial state of the component
          animate={{ opacity: 1, scale: 0.9 }} // Animation to be applied
          transition={{ duration: 0.3 }} // Transition configuration
          whileHover={{ scale: 1 }} // Animation on hover
          className="nav-btn manage-margin-card"
        >
          <a
            target="__blank"
            href="https://summerofcode.withgoogle.com/programs/2023/projects/zQRvTgia"
            className="nav-btn-link small-lnk"
          >
            Google Summer Of Code @ The Tor Project
          </a>
        </motion.div>
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
            <motion.div
              className="nav2 tp  btn-on-card-dgn"
              initial={{ opacity: 0, scale: 0.7, y: 0 }}
              animate={{ opacity: 1, scale: 0.9, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.2 }}
            >
              {/* <a
                href="https://summerofcode.withgoogle.com/programs/2023/projects/zQRvTgia"
                target="__blank"
              > */}
              <Link to="/gsoc/" className="nav-btn6 ">
                <h1 className="nav-btn-link6">Gsoc</h1>
              </Link>
              {/* </a> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
