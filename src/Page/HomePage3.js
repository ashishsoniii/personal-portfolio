import React from "react";
import Hp3projectCard1 from "../components/Hp3projectCard1";
import { motion } from "framer-motion";

function HomePage3() {
  return (
    <>
      <div className="homepage3-heading">Projects</div>
      <motion.section
        // initial={{ opacity: 0, x: 100 }}
        // whileInView={{ opacity: 1, x: 10 }}
        // transition={{ duration:  }} // Transition configuration
        className="homepage3"
      >
        <motion.div className="firstTwo">
          <Hp3projectCard1
            heading="No Limits Fitness Gym App"
            link="/lik"
            backgroundColor="hp3-bg-white"
          />
          <Hp3projectCard1
            heading="RasYog"
            link="/lik"
            backgroundColor="hp3-bg-yellow"
          />
        </motion.div>
        <motion.div className="firstTwo">
          <Hp3projectCard1
            heading="DineYog"
            link="/lik"
            backgroundColor="hp3-bg-blue"
          />
          <Hp3projectCard1
            heading="FlairFest"
            link="/lik"
            backgroundColor="hp3-bg-green"
          />
        </motion.div>
      </motion.section>
    </>
  );
}

export default HomePage3;
