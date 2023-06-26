import { motion } from "framer-motion";
import React from "react";
// import imgCard2 from "../assets/gsoc.png";
// import imgCard2 from "../assets/gsoc.png";

function Card2() {
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
          <a href="https://rasyog.netlify.app/team" target="__blank" className="nav-btn-link small-lnk">
            Frontend @ YogLabs
          </a>
        </motion.div>
      </div>

      <div className="card2">
      
        <div className="card2-text">
          <div className="card2-text-heading">
          <p>
    
          Yoglabs is an early-phase research lab dedicated to advancing the fields of data analysis, AI, ML, and data aggregation.
          </p>
          </div>
          <div className="card2-text-content">
          Enhancing project frontends, building impactful landing pages, and delivering exceptional user experiences through skilled frontend development across multiple projects. <br />
            <br />
            {/* todo */}
            <a
              href="https://summerofcode.withgoogle.com/programs/2023/projects/zQRvTgia"
              target="__blank"
            >
              {/* Link to Project */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card2;
