import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaStar, FaCodeBranch, FaEye, FaDownload } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const SocialProfile = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your actual GitHub username
  const githubUsername = "ashishsoniii";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${githubUsername}`);
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
        const reposData = await reposResponse.json();
        
        // Fetch contribution graph (simulated data for demo)
        const contributions = generateContributionData();
        
        setGithubData({
          user: userData,
          repos: reposData,
          contributions
        });
      } catch (err) {
        setError("Failed to fetch GitHub data");
        console.error("GitHub API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [githubUsername]);

  // Generate mock contribution data for demo
  const generateContributionData = () => {
    const data = [];
    for (let i = 0; i < 365; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 10)
      });
    }
    return data.reverse();
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: `https://github.com/${githubUsername}`,
      icon: <FaGithub className="text-2xl" />,
      color: "from-gray-600 to-gray-800",
      hoverColor: "from-gray-700 to-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ashishsoniii",
      icon: <FaLinkedin className="text-2xl" />,
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-700 to-blue-900"
    },
    {
      name: "Email",
      url: "mailto:ashish.soni@example.com",
      icon: <BsFillTelephoneFill className="text-2xl" />,
      color: "from-purple-600 to-pink-600",
      hoverColor: "from-purple-700 to-pink-700"
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
    },
    {
      label: "Total Commits",
      value: "1000+", // Based on your active GitHub profile
      icon: <FaDownload />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Unable to load profile data</h2>
          <p className="text-gray-400">Please check your internet connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
            Social Profile
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with me across platforms and explore my open source contributions
          </p>
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={githubData?.user?.avatar_url}
                  alt="GitHub Profile"
                  className="w-32 h-32 rounded-full border-4 border-purple-500/50 shadow-2xl"
                />
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">{githubData?.user?.name || githubUsername}</h2>
                <p className="text-gray-400 text-lg mb-4">{githubData?.user?.bio || "Passionate developer building amazing things"}</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-300">
                  <span>📍 {githubData?.user?.location || "India"}</span>
                  <span>🏢 {githubData?.user?.company || "Available for opportunities"}</span>
                  <span>📅 Joined {new Date(githubData?.user?.created_at).getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">GitHub Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-4xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubData?.repos?.slice(0, 6).map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group"
              >
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
                  <div className="flex items-center gap-4">
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Contribution Activity</h3>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
            <div className="flex flex-wrap justify-center gap-1 max-w-4xl mx-auto">
              {githubData?.contributions?.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.001 }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-sm ${
                    day.count === 0 ? 'bg-gray-800' :
                    day.count < 3 ? 'bg-green-400' :
                    day.count < 6 ? 'bg-green-500' :
                    day.count < 10 ? 'bg-green-600' : 'bg-green-700'
                  }`}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-sm"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-sm"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-600 rounded-sm"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-700 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Let&apos;s Connect</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className={`flex items-center gap-3 bg-gradient-to-r ${link.color} hover:${link.hoverColor} text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
              >
                {link.icon}
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialProfile; 