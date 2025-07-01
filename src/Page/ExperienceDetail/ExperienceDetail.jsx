import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { getExperienceById } from "../../data/workExperienceData";
import { FaArrowLeft, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const ExperienceDetail = () => {
  const { id } = useParams();
  const experience = getExperienceById(id);

  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Experience Not Found</h1>
          <Link to="/experience" className="text-purple-400 hover:text-purple-300">
            ← Back to Experience
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-20`} />
        
        {/* Content */}
        <div className="relative z-10 pt-28 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                to="/experience"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" />
                Back to Experience
              </Link>
            </motion.div>

            {/* Company Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="text-8xl mb-6">{experience.logo}</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {experience.company}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
                {experience.position}
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400 text-lg">
                <span>📍 {experience.location}</span>
                <span>•</span>
                <span>📅 {experience.duration}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 pb-20"
      >
        {/* Metrics Grid */}
        <motion.div variants={itemVariants} className="mb-16 mt-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Key Metrics & Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {experience.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Projects */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Key Projects & Contributions
          </h3>
          <div className="space-y-8">
            {experience.keyProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">{project.name}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-4">
                      <h5 className="text-green-400 font-semibold mb-1">Impact</h5>
                      <p className="text-green-300">{project.impact}</p>
                    </div>
                  </div>
                  <div className="lg:w-48">
                    <h5 className="text-gray-400 font-semibold mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Technologies */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">Major Achievements</h3>
            <div className="space-y-4">
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">Technologies & Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              {experience.tech.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-white font-semibold">{tech}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Challenges */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">Challenges Overcome</h3>
            <div className="space-y-4">
              {experience.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-4"
                >
                  <p className="text-gray-300">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">Key Learnings</h3>
            <div className="space-y-4">
              {experience.learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4"
                >
                  <p className="text-gray-300">{learning}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Company Information */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">About {experience.company}</h3>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {experience.companyInfo.description}
                </p>
                {experience.companyInfo.mission && (
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Mission</h4>
                    <p className="text-blue-300">{experience.companyInfo.mission}</p>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                {Object.entries(experience.companyInfo).map(([key, value]) => {
                  if (key === 'description' || key === 'mission') return null;
                  return (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700/30">
                      <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-white font-semibold">{value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
                         Let&apos;s discuss how I can bring similar value to your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ashish.soni@example.com"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <BsFillTelephoneFill />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/ashish-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/ashish-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperienceDetail; 