import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center items-center w-full min-h-[60vh] py-10 px-2 sm:px-4"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-5xl rounded-3xl p-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 shadow-2xl mx-auto"
      >
        {/* Glassy inner card */}
        <div className="relative bg-black/70 backdrop-blur-2xl rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 text-center border border-white/20 overflow-hidden w-full">
          {/* Shimmer effect */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-white/10 via-pink-200/10 to-purple-200/10 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-lg animate-pulse">
            About Me
          </h2>
          <div className="text-base sm:text-lg md:text-xl text-pink-300 font-semibold mb-4 tracking-wide uppercase">
            Dream. Build. Inspire.
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-medium">
            I&apos;m a passionate <span className="font-bold text-pink-400">frontend developer</span> who loves turning bold ideas into beautiful, high-performance web experiences.<br className="hidden md:block" />
            From open source to startups, I thrive on building products that make people say <span className="font-bold text-purple-400">&quot;wow!&quot;</span>.<br className="hidden md:block" />
            Always learning, always shipping, always pushing the limits of what&apos;s possible in the browser.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
