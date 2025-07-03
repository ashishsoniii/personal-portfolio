import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaUsers } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const ProjectsSection = () => {
  const projects = projectsData;

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "from-green-500 to-emerald-500";
      case "In Progress": return "from-yellow-500 to-orange-500";
      case "Planned": return "from-blue-500 to-cyan-500";
      default: return "from-gray-500 to-gray-600";
    }
  };



  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Showcasing my technical expertise through impactful, scalable solutions that solve real-world problems
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-4 sm:p-6 md:p-8 hover:border-gray-600/50 transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Left: Image and Basic Info */}
                  <div className="space-y-6">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white shadow-lg`}>
                          {project.status}
                        </span>
                      </div>
                      

                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      {Object.entries(project.impact).map(([key, value]) => (
                        <div key={key} className="text-center p-2 sm:p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                          <div className="text-lg sm:text-2xl font-bold text-white mb-1">{value}</div>
                          <div className="text-gray-400 text-xs sm:text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="space-y-6">
                    {/* Title and Category */}
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg text-purple-300 font-semibold mb-2">{project.shortTitle}</p>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.fullDescription}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-3 sm:mb-4 flex items-center">
                        <FaCode className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-400" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.1 }}
                            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${tech.color} text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                          >
                            <tech.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                            {tech.name}
                          </motion.div>
                        ))}
                      </div>
                    </div>



                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                      >
                        <FaGithub />
                        View Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
                  {/* Project Image */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-2 right-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white shadow-lg`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                    </div>

                                         {/* Tech Stack */}
                     <div className="flex flex-wrap gap-2">
                       {project.tech.slice(0, 4).map((tech) => (
                         <span
                           key={tech.name}
                           className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tech.color} text-white shadow-md`}
                         >
                           <tech.icon className="w-3 h-3" />
                           {tech.name}
                         </span>
                       ))}
                      {project.tech.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300"
                      >
                        <FaGithub className="w-3 h-3" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 border border-purple-500/30">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              Explore my complete portfolio and get in touch to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://github.com/ashishsoniii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
              >
                <FaGithub />
                View All Projects
              </a>
              <a
                href="mailto:ashishsoni2002@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
              >
                <FaUsers />
                Let&apos;s Collaborate
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
