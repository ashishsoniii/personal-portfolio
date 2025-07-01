import { motion } from "framer-motion";
import ExperienceCard from "./components/ExperienceCard";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "ClearFeed",
      position: "Member of Technical Staff",
      location: "Bangalore, India",
      duration: "Nov 2024 - Present",
      logo: "🚀",
      color: "from-purple-600 to-pink-600",
      achievements: [
        "Building Clearfeed's core product that makes support as easy and fast as chatting",
        "Built and shipped 50+ features and improvements — including dark mode and passwordless login via magic links",
        "Improved front-end performance by refactoring UI components and using memoization & caching technique, reducing load time by 40%",
        "Contributed 160+ commits in 6 months on GitHub, becoming one of the top 5 committers in a fast-paced development environment"
      ],
      tech: ["React", "TypeScript", "Node.js", "GitHub"]
    },
    {
      id: 2,
      company: "GAP INC.",
      position: "iOS Developer Intern",
      location: "Hyderabad, India",
      duration: "July 2024 - Aug 2024",
      logo: "🍎",
      color: "from-blue-600 to-cyan-600",
      achievements: [
        "Developed 10+ reusable SwiftUI components for Gap's Old Navy app, significantly improving user experience, interface consistency, and code maintainability"
      ],
      tech: ["SwiftUI", "iOS", "Xcode", "Git"]
    },
    {
      id: 3,
      company: "Code for GovTech (C4GT) 24",
      position: "Full Stack Intern @ MeitY",
      location: "Delhi, India (Remote)",
      duration: "Jun 2024 - Oct 2024",
      logo: "🏛️",
      color: "from-green-600 to-emerald-600",
      achievements: [
        "Built an open sourced custom CMS for the iGOT platform supporting 22 languages, enabling SPVs to manage multilingual content dynamically"
      ],
      tech: ["Full Stack", "CMS", "Multilingual", "Open Source"]
    },
    {
      id: 4,
      company: "Google Summer of Code 23",
      position: "Open Source Developer @ The Tor Project",
      location: "Winchester, Massachusetts (Remote)",
      duration: "Jun 2023 - Sep 2023",
      logo: "🌐",
      color: "from-orange-600 to-red-600",
      achievements: [
        "Translated Figma designs into a responsive, pixel-perfect UI, boosting user engagement by 40% and reducing bounce rate by 25% within 5 months",
        "Implemented the website using Lektor CMS, cutting content update and maintenance time",
        "Used HTML, CSS, and Bootstrap to build a clean, accessible, & performance-optimized UI",
        "Collaborated with global contributors on GitLab to maintain code quality and align UI implementation with The Tor Project's design and privacy guidelines"
      ],
      tech: ["HTML", "CSS", "Bootstrap", "Lektor CMS", "GitLab"]
    },
    {
      id: 5,
      company: "YogLabs",
      position: "Frontend Developer (Part Time)",
      location: "Jaipur, Rajasthan (Remote)",
      duration: "Jan 2023 - Jun 2023",
      logo: "⚡",
      color: "from-indigo-600 to-purple-600",
      achievements: [
        "Enhanced 3 pre-built dashboards by fixing 10+ critical bugs and adding 4+ key features to improve usability and performance",
        "Built and integrated a Flask backend, improving functionality and user data management",
        "Developed CI/CD pipelines and deployed 4 projects on AWS S3"
      ],
      tech: ["Frontend", "Flask", "AWS S3", "CI/CD"]
    }
  ];

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
          {experiences.map((experience, index) => (
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
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Let&apos;s create the next generation of digital experiences together.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Let&apos;s Connect
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience; 