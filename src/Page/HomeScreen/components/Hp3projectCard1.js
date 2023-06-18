import { motion } from "framer-motion";
import React from "react";

function Hp3projectCard1({ heading, link, backgroundColor , content ,Skills }) {
  // const Skills = [
  //   {  text: "React" },
  //   {  text: "HTML" },
  //   {  text: "CSS" },
  //   {  text: "Javascript" },
  //   {  text: "Web Development" },
  //   // Add more buttons as needed
  // ];

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

        <div className="card-skill-div-res">
          {Skills.map((skill, index) => (
            <motion.div
              className="card-skill"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="card-btn-skill">
                <h1 className="card-btn-skill-txt">{skill}</h1>
              </div>
            </motion.div>
          ))}
        </div>


        <div className={`hp3-card-content ${backgroundColor}`}>
          {content}
        </div>
        <div className={`hp3-card-link ${backgroundColor}`}>
          <a href={link}>Sample Website Link</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Hp3projectCard1;
