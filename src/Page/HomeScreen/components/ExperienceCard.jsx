import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const ExperienceCard = ({ experience }) => {
  const isOpenSource = experience.company.includes("Google Summer of Code") || experience.company.includes("C4GT") || experience.company.includes("Code for GovTech");
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
      
      {/* Open Source Badge */}
      {isOpenSource && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white/20">
            🌐 Open Source
          </div>
        </div>
      )}
      
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-4 sm:p-6 md:p-8 hover:border-gray-600/50 transition-all duration-500">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
          <div className="flex items-start space-x-3 sm:space-x-4 mb-4 lg:mb-0">
            {/* Company Logo */}
            <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${experience.color} rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
              {experience.logo}
            </div>
            
            {/* Company Info */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {experience.company}
              </h3>
              <p className="text-base sm:text-lg text-purple-300 font-semibold mb-1">
                {experience.position}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base">
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {experience.location}
                </span>
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {experience.duration}
                </span>
              </div>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="flex-shrink-0">
            <span className={`inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${experience.color} text-white shadow-lg`}>
              {experience.duration.includes("Present") ? "Active" : "Completed"}
            </span>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4 flex items-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {experience.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-2 sm:space-x-3 text-gray-300 leading-relaxed text-sm sm:text-base"
              >
                <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Section and View Details Button - Side by Side */}
        <div className="border-t border-gray-700/50 pt-4 sm:pt-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Tech Stack */}
            <div className="flex-1">
              <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4 flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {experience.tech.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${experience.color} text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* View Details Button */}
            <div className="flex-shrink-0">
              <Link
                to={`/experience/${experience.id}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group text-sm sm:text-base"
              >
                View Full Details
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard; 