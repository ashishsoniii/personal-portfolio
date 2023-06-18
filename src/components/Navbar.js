import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";

function Navbar() {
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, type: "spring", bounce: 0.5 },
    },
  };

  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <>
      <div className="nav">
        <motion.a
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.9 }}
          className="nav-btn mrgn-nav bg-hover-grey"
          href="/"
          onClick={handleButtonClick}
        >
          <div className="nav-wrap-icon bg-hover-grey">
            <div className="nav-icon-add bg-hover-grey">
              <FaHome />
            </div>
            <div className="nav-btn-link bg-hover-grey">Home Page</div>
          </div>
        </motion.a>

        <motion.a
          className="nav-btn bg-hover-grey"
          href="#"
          onClick={handleButtonClick}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.9 }}
        >
          <div className="nav-wrap-icon bg-hover-grey">
            <div className="nav-icon-add bg-hover-grey">
              <HiOutlineNewspaper />
            </div>
            <div className="nav-btn-link bg-hover-grey">Portfolio</div>
          </div>
        </motion.a>

        <motion.a
          className="nav-btn bg-hover-grey"
          href="#contact"
          onClick={handleButtonClick}
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.9 }}
        >
          <div className="nav-wrap-icon bg-hover-grey">
            <div className="nav-icon-add bg-hover-grey">
              <BsFillTelephoneFill />
            </div>
            <div className="nav-btn-link bg-hover-grey">Contact Me</div>
          </div>
        </motion.a>
      </div>
    </>
  );
}

export default Navbar;
