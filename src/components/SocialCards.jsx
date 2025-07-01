import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaStar, FaCodeBranch, FaEye, FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const SocialCards = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  const githubUsername = "ashishsoniii";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
        const userData = await userResponse.json();
        
        // Fetch top repositories
        const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=stars&per_page=3`);
        const reposData = await reposResponse.json();
        
        setGithubData({
          user: userData,
          repos: reposData
        });
      } catch (err) {
        console.error("GitHub API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [githubUsername]);

  const socialLinks = [
    {
      name: "GitHub",
      url: `https://github.com/${githubUsername}`,
      icon: <FaGithub className="text-3xl" />,
      color: "from-gray-600 to-gray-800",
      hoverColor: "from-gray-700 to-gray-900",
      description: "Open Source Contributions"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ashishsoniii",
      icon: <FaLinkedin className="text-3xl" />,
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-700 to-blue-900",
      description: "Professional Network"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Ashishsoni_1",
      icon: <FaTwitter className="text-3xl" />,
      color: "from-sky-500 to-blue-600",
      hoverColor: "from-sky-600 to-blue-700",
      description: "Tech Updates & Thoughts"
    },
    {
      name: "Email",
      url: "mailto:ashishsoni2002@gmail.com",
      icon: <BsFillTelephoneFill className="text-3xl" />,
      color: "from-purple-600 to-pink-600",
      hoverColor: "from-purple-700 to-pink-700",
      description: "Let's Connect!"
    }
  ];

  const stats = [
    {
      label: "Repositories",
      value: githubData?.user?.public_repos || 0,
      icon: <FaCodeBranch />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      label: "Followers",
      value: githubData?.user?.followers || 0,
      icon: <FaEye />,
      color: "from-green-500 to-emerald-500"
    },
    {
      label: "Stars Earned",
      value: githubData?.repos?.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0) || 0,
      icon: <FaStar />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
            Connect & Collaborate
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                         Let&apos;s build something amazing together! Explore my work and reach out.
          </p>
        </motion.div>

        {/* Social Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Card */}
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-500 group-hover:scale-105`}
                whileHover={{ y: -10 }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                    {link.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {link.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{link.description}</p>
                  <div className="flex items-center justify-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-semibold">Visit Profile</span>
                    <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Section */}
        {!loading && githubData && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* GitHub Profile */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <img
                    src={githubData.user.avatar_url}
                    alt="GitHub Profile"
                    className="w-24 h-24 rounded-full border-4 border-purple-500/50 shadow-2xl mx-auto lg:mx-0 mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">{githubData.user.name || githubUsername}</h3>
                  <p className="text-gray-400">{githubData.user.bio || "Passionate developer building amazing things"}</p>
                </div>
                
                {/* Stats */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-6 text-center lg:text-left">GitHub Activity</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className={`text-3xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Top Repositories */}
        {!loading && githubData?.repos && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {githubData.repos.slice(0, 3).map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                        {repo.name}
                      </h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <FaStar className="text-yellow-500" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCodeBranch className="text-blue-500" />
                          {repo.forks_count}
                        </span>
                      </div>
                      <span className="text-xs bg-gray-700/50 px-2 py-1 rounded">
                        {repo.language || "Other"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Let&apos;s create the next generation of digital experiences together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ashish.soni@example.com"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <BsFillTelephoneFill />
                Get in Touch
              </a>
              <a
                href="/social"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <FaGithub />
                View Full Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialCards; 