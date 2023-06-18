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
    { link: "", text: "Web Development" },
    // Add more buttons as needed
  ];

  return (
    <>
      {/* Section 1 */}
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
            <div className="ashish-txt mobile-only">
              Designing and developing the web of tomorrow!
            </div>
            <div className="hide-mobile">
              <button className="glow-on-hover" type="button">
                Web Developer
              </button>
              <div className="nav-btn-2 tp">
                <a href="/" className="nav-btn-link2" style={{ color: "black" }}>
                  Building modern, mobile-first websites that make a lasting impression!
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
      <div className="homeSection2">
        <div className="homes-div-res">
          {Skills.map((btn, index) => (
            <motion.div
              className="nav2 tp"
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="nav-btn3">
                <h1 className="nav-btn-link3">{btn.text}</h1>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="hp-right hs2"
          initial={{ opacity: 0, scale: 0.9, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="hp-text-text">
            Turning design visions into seamless and responsive web experiences
            <br />
            that captivate and engage users across devices.
          </div>
        </motion.div>
      </div>

      {/* Section 3 */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          // exit={{ opacity: 0, y: -250 }}
        >
          <HomePage2 />
        </motion.div>
      </AnimatePresence>

      {/* Section 4 */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 2 }}
          // exit={{ opacity: 0, y: -500 }}
        >
          <HomePage3 />
        </motion.div>
      </AnimatePresence>

      {/* Section 5 */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 130 }}
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
