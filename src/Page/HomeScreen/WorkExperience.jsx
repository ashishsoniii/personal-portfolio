import { motion } from "framer-motion";
import ExperienceCard from "./components/ExperienceCard";
import { workExperienceData } from "../../data/workExperienceData";
import { FaChevronDown } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = workExperienceData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
            Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that leave lasting impressions. 
            From startups to tech giants, every project tells a story of innovation and excellence.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {/* First 3 Full Cards */}
          {experiences.slice(0, 3).map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}

          {/* Remaining Compact Cards */}
          {experiences.slice(3).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                More Amazing Experiences
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {experiences.slice(3).map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="group relative"
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Open Source Badge for Compact Cards */}
                    {(experience.company.includes("Google Summer of Code") || experience.company.includes("C4GT") || experience.company.includes("Code for GovTech")) && (
                      <div className="absolute -top-3 -right-3 z-10">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg border border-white/20">
                          🌐 Open Source
                        </div>
                      </div>
                    )}
                    
                    {/* Compact Card */}
                    <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                          {experience.logo}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                            {experience.company}
                          </h3>
                          <p className="text-sm text-purple-300 font-semibold">{experience.position}</p>
                        </div>
                        {/* Excitement Badge */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                          {experience.company === "Code for GovTech (C4GT) 24" ? "🏛️" :
                           experience.company === "Google Summer of Code 23" ? "🌐" :
                           experience.company === "YogLabs" ? "⚡" : "🚀"}
                        </div>
                      </div>
                      
                      {/* Quick Info */}
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                        <span>📍 {experience.location}</span>
                        <span>📅 {experience.duration}</span>
                      </div>
                      
                      {/* Key Achievement */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {experience.shortDescription}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.color} text-white shadow-md`}
                          >
                            {tech}
                          </span>
                        ))}
                        {experience.tech.length > 3 && (
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-gray-300">
                            +{experience.tech.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      {/* View Details Link */}
                      <div className="flex justify-center">
                        <a
                          href={`/experience/${experience.id}`}
                          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors group-hover:underline"
                        >
                          View Full Details
                          <FaChevronDown className="text-xs group-hover:translate-y-0.5 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience; 