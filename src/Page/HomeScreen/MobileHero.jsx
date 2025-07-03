import PhotoRound from "./components/PhotoRound";
import { motion } from "framer-motion";

const MobileHero = () => {
  return (
    <section className="block sm:hidden w-full min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-2 pt-8 pb-12 relative overflow-hidden">
      {/* Glowing background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-[50vw] max-w-md bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-2xl rounded-full z-0"
      />
      {/* Profile Image with glow */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 blur-xl opacity-80 scale-110 animate-pulse" />
          <div className="relative z-10">
            <PhotoRound />
          </div>
        </div>
        {/* Name */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg mb-2 text-center">
          Ashish Soni
        </h1>
        {/* Tagline */}
        <p className="text-base font-medium text-white/90 mb-4 text-center px-2">
          Building <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-bold">crazy cool</span> mobile-first websites!
        </p>
        {/* Call to action */}
        <a
          href="#contact"
          className="mt-3 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-md hover:scale-105 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-sm"
        >
          Let&apos;s Connect!
        </a>
      </div>
    </section>
  );
};

export default MobileHero; 