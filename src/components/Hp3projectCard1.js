import { motion } from "framer-motion";
import React from "react";

function Hp3projectCard1({ heading, link, backgroundColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} // Initial state of the component
      animate={{ opacity: 1, scale: 1 }} // Animation to be applied
      transition={{ duration: 0.3 }} // Transition configuration
      whileHover={{ scale: 1.1 }} // Animation on hover
      className={`hp-projects ${backgroundColor}`}
    >
      <div className={`hp3-card ${backgroundColor}`}>
        <div className={`hp3-card-heading ${backgroundColor}`}>{heading}</div>
        <div className={`hp3-card-content ${backgroundColor}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          beatae enim?
        </div>
        <div className={`hp3-card-link ${backgroundColor}`}>
          <a href={link}>Link</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Hp3projectCard1;
