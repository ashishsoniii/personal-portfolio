import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", bounce: 0.5 },
    },
  };

  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div className="flex justify-center md:justify-start bg-black p-2 md:p-4">
      <motion.div variants={navItemVariants} initial="hidden" animate="visible">
        <Link
          className="flex items-center mx-1 md:mx-2 px-2 md:px-4 py-1 md:py-2 text-white bg-transparent border-2 border-[#debbbb] rounded-full transition hover:bg-[#181d21] text-sm md:text-base"
          to="/"
          onClick={handleButtonClick}
        >
          <FaHome className="mr-1 text-xl md:text-2xl" />
          <span>Home Page</span>
        </Link>
      </motion.div>

      <motion.a
        className="flex items-center mx-1 md:mx-2 px-2 md:px-4 py-1 md:py-2 text-white bg-transparent border-2 border-[#debbbb] rounded-full transition hover:bg-[#181d21] text-sm md:text-base"
        href="https://drive.google.com/file/d/1Jx-An1OjOXvJWS6vQjvCO40sJ_Q54Sfb/view?usp=drive_link"
        target="__blank"
        onClick={handleButtonClick}
        variants={navItemVariants}
        initial="hidden"
        animate="visible"
      >
        <HiOutlineNewspaper className="mr-1 text-xl md:text-2xl" />
        <span>Portfolio</span>
      </motion.a>

      <motion.a
        className="flex items-center mx-1 md:mx-2 px-2 md:px-4 py-1 md:py-2 text-white bg-transparent border-2 border-[#debbbb] rounded-full transition hover:bg-[#181d21] text-sm md:text-base"
        href="../#contact"
        onClick={handleButtonClick}
        variants={navItemVariants}
        initial="hidden"
        animate="visible"
      >
        <BsFillTelephoneFill className="mr-1 text-xl md:text-2xl" />
        <span>Contact Me</span>
      </motion.a>
    </div>
  );
}

export default Navbar;
