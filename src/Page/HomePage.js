import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Page.css";
import PhotoRound from "../components/PhotoRound";
import HomePage2 from "./HomePage2";
import HomePage3 from "./HomePage3";
import HomePage4 from "./HomePage4";

function HomePage() {
  const Skills = [
    { link: "", text: "React" },
    { link: "", text: "HTML" },
    { link: "", text: "CSS" },
    { link: "", text: "Javascript" },
    { link: "", text: "Web Developement" },
    // Add more buttons as needed
  ];

  return (
    <>
      <motion.div className="homepage-main">
        <AnimatePresence>
          <motion.div
            className="hp-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500 }}
            transition={{ duration: 0.5 }}
          >
            <div className="ashish-txt">Ashish Soni</div>
            <div className=" ashish-txt mobile-only">
              Designing and developing the web of tomorrow!
            </div>
            <div className="nav tp hide-mobile ">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} // Initial state of the component
                animate={{ opacity: 1, scale: 1 }} // Animation to be applied
                transition={{ duration: 0.3 }} // Transition configuration
                whileHover={{ scale: 1.1 }} // Animation on hover
                className="nav-btn bg-hover-white "
              >
                <a href="/" className="nav-btn-link bg-hover-white">
                  Web Developer
                </a>
              </motion.div>
              <div className="nav-btn-2 tp">
                <a
                  href="/"
                  className="nav-btn-link2"
                  style={{ color: "black" }}
                >
                  Lorem Ipsum
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="hp-right img-correction"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PhotoRound />
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      {/* Section 2 */}
      {/* Section 2 */}
      {/* Section 2 */}
      <div className="homeSection2">
        <div className="homes-div-res">
          {Skills.map((btn, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 0 }} // Initial state of the component
              animate={{ opacity: 1, scale: 1, y: -100 }} // Animation to be applied
              transition={{ duration: 0.3 }} // Transition configuration
              // initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}

              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              // transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.3 }} // Animation on hover
              className="nav2 tp"
              key={index}
            >
              <div className="nav-btn3" key={index}>
                <h1 className="nav-btn-link3">{btn.text}</h1>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="hp-right hs2"
          initial={{ opacity: 0, scale: 0.9, y: 0 }} // Initial state of the component
          animate={{ opacity: 1, scale: 1, y: -100 }} // Animation to be applied
          transition={{ duration: 0.3 }} // Transition configuration
          // initial={{ opacity: 0, y: 50 }}
          // animate={{ opacity: 1, y: 0 }}

          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          // transition={{ duration: 0.5 }}
          // whileHover={{ scale: 1.3 }} // Animation on hover
        >
          <div className="hp-text-text">
            Turning design visions into seamless and responsive web experiences <br/>
            that captivate and engage users across devices.
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          // animate={{ opacity: 1, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          exit={{ opacity: 0, y: -550 }}
        >
          <HomePage2 />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          // animate={{ opacity: 1, y: 50 }}
          // initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0, y: -500 }}
        >
          <HomePage3 />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          // animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0, y: -500 }}
        >
          <HomePage4 />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HomePage;
