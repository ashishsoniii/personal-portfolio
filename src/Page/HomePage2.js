import React from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import { motion } from "framer-motion";

function HomePage2() {
  return (
    <>
      <div className="HomePage2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 30 }}
          transition={{ duration: 1.4 }} // Transition configuration
          exit={{ opacity: 0, y: -50 }}
          className="hp2-card1"
        >
          <Card1 />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 90 }}
          transition={{ duration: 1.4 }} // Transition configuration
          exit={{ opacity: 0, y: -50 }}
          className="hp2-card2"
        >
          <Card2 />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{ duration: 1.4 }} // Transition configuration
            exit={{ opacity: 0, y: -50 }}
            className="hp2-card2 marign-adjust three-bg"
          >
            <Card3 />
          </motion.div>
        </motion.div>
        {/* <div className="hp2-card3">3</div> */}
      </div>
    </>
  );
}

export default HomePage2;
