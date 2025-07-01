import { motion } from "framer-motion";
import PhotoRound from "./components/PhotoRound";

function HomePage() {
  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8 overflow-hidden">
      {/* Animated Gradient Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] max-w-5xl max-h-[30rem] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-3xl rounded-full z-0"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-0"
      >
        {/* Left: Name & Tagline */}
        <div className="w-full md:w-2/3 flex flex-col items-start justify-center text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg mb-4"
          >
            Ashish Soni
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-6 drop-shadow"
          >
            Building modern, mobile-first websites that make a <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-bold">lasting impression</span>!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-white/20"
          >
            Web Developer
          </motion.button>
        </div>
        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-70 scale-110 z-0 animate-pulse" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <PhotoRound />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
