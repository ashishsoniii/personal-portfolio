import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineNewspaper } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pillRef = useRef(null);

  const navLinks = [
    {
      label: "Home Page",
      icon: <FaHome className="mr-2 text-2xl" />,
      to: "/",
      type: "link",
    },
    {
      label: "Portfolio",
      icon: <HiOutlineNewspaper className="mr-2 text-2xl" />,
      to: "https://drive.google.com/file/d/1Jx-An1OjOXvJWS6vQjvCO40sJ_Q54Sfb/view?usp=drive_link",
      type: "a",
      target: "__blank",
    },
    {
      label: "Contact Me",
      icon: <BsFillTelephoneFill className="mr-2 text-2xl" />,
      to: "../#contact",
      type: "a",
    },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.12, duration: 0.4, type: "spring" },
    }),
  };

  const pillVariants = {
    closed: {
      height: 56,
      borderRadius: "9999px",
      transition: { 
        height: { type: "spring", stiffness: 300, damping: 30 },
        borderRadius: { duration: 0.3, ease: "easeInOut", delay: 0.2 }
      },
    },
    open: {
      height: "auto",
      borderRadius: "24px",
      transition: { 
        borderRadius: { duration: 0.3, ease: "easeInOut" },
        height: { type: "spring", stiffness: 150, damping: 20, delay: 0.3 }
      },
    },
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        pillRef.current &&
        !pillRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full flex flex-col items-cente">
      <div className="w-full h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-80 rounded-b-2xl mb-1" />
      {/* Mobile: Dynamic Island */}
      <div className="block sm:hidden w-full flex justify-center items-center pt-4 px-4 absolute top-0 left-0 z-50">
        {/* Backdrop overlay when menu is open */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/10 z-40"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </AnimatePresence>
        <motion.div
          ref={pillRef}
          animate={menuOpen ? "open" : "closed"}
          variants={pillVariants}
          className="relative bg-gradient-to-r from-purple-700/80 via-pink-600/80 to-blue-600/80 shadow-2xl border border-white/30 flex flex-col items-stretch px-4 w-full max-w-[360px] overflow-hidden max-h-[80vh] rounded-3xl backdrop-blur-md"
        >
          <div className="flex items-center w-full pt-2">
            <span className="text-white font-extrabold text-lg flex-1 pl-2 select-none">
              Ashish Soni
            </span>
            <button
              className="ml-auto p-2 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 text-white text-2xl shadow-lg border-2 border-white/20 hover:scale-110 transition-all duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center w-full mt-2 pb-4 overflow-y-auto max-h-[60vh]"
              >
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full px-2"
                  >
                    {item.type === "link" ? (
                      <Link
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center w-full my-1 py-2 font-extrabold text-white text-base rounded-full border-2 border-pink-400/40 bg-gradient-to-r from-purple-700/80 to-pink-600/80 shadow-md hover:scale-105 hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.to}
                        target={item.target || "_blank"}
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center w-full my-1 py-2 font-extrabold text-white text-base rounded-full border-2 border-pink-400/40 bg-gradient-to-r from-purple-700/80 to-pink-600/80 shadow-md hover:scale-105 hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
                      >
                        {item.icon}
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop nav */}
      <div className="w-full flex justify-center items-center px-2 py-4 hidden sm:flex overflow-hidden">
        <div
          className="flex flex-wrap justify-center items-center space-x-2 md:space-x-4 rounded-full px-4 md:px-6 py-2 shadow-2xl border border-white/30 bg-gradient-to-r from-purple-700/60 via-pink-500/40 to-blue-500/40 backdrop-blur-md w-full max-w-5xl mx-auto overflow-x-auto overflow-y-hidden"
        >
          {navLinks.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.1,
                duration: 0.4,
                type: "spring",
              }}
              whileHover={{ scale: 1.12 }}
            >
              {item.type === "link" ? (
                <Link
                  to={item.to}
                  className="flex items-center px-4 py-2 font-extrabold text-white text-base sm:text-lg md:text-xl rounded-full border-2 border-pink-400/40 bg-gradient-to-r from-purple-700/70 to-pink-600/70 shadow-lg hover:scale-105 hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.to}
                  target={item.target || "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 font-extrabold text-white text-base sm:text-lg md:text-xl rounded-full border-2 border-pink-400/40 bg-gradient-to-r from-purple-700/70 to-pink-600/70 shadow-lg hover:scale-105 hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
                >
                  {item.icon}
                  {item.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
