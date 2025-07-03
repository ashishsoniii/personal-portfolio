import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiMaterialdesign, SiMicrosoftazure, SiHostinger, SiNextdotjs, SiPython, SiFlask, SiTailwindcss, SiShopify } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

export const projectsData = [
  {
    id: "nlf-gym",
    title: "No Limits Fitness GYM Management Website",
    shortTitle: "NLF WEBAPP",
    description: "Comprehensive gym management system for 300+ members",
    fullDescription: "A full-stack web application designed to streamline gym operations, automate administrative tasks, and enhance member experience through digital transformation.",
    image: "/src/assets/ashish.jpg", // Replace with actual project screenshots
    status: "Completed",
    impact: {
      members: "300+",
      paperwork: "90%",
      timeSaved: "15 hours/week"
    },
    achievements: [
      "Developed a web app to manage 300+ gym members, reducing 90% of paperwork and saving 15 hours weekly on admin tasks",
      "Automated membership management, including invoice generation, gym plan creation, and member communication",
      "Set up CRON jobs to send automated alerts for membership expiration and birthdays, improving client communication"
    ],
    tech: [
      { name: "React", icon: SiReact, color: "from-blue-500 to-cyan-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-emerald-500" },
      { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-700" },
      { name: "Express", icon: SiExpress, color: "from-gray-600 to-gray-700" },
      { name: "Material UI", icon: SiMaterialdesign, color: "from-blue-600 to-blue-700" },
      { name: "Azure", icon: SiMicrosoftazure, color: "from-blue-500 to-blue-600" },
      { name: "Hostinger", icon: SiHostinger, color: "from-orange-500 to-red-500" }
    ],
    category: "Full-Stack",
    complexity: "High",
    githubUrl: "#", // Add actual GitHub URL
    liveUrl: "#", // Add actual live demo URL
    featured: true
  },
  {
    id: "police-feedback",
    title: "Police Feedback System WebApp",
    shortTitle: "RAJ POLICE",
    description: "Citizen feedback and analytics platform for police department",
    fullDescription: "A dual-platform system consisting of a citizen feedback portal and an administrative analytics dashboard, designed to improve police-citizen communication and data-driven decision making.",
    image: "/src/assets/ashish2.jpg",
    status: "Completed",
    impact: {
      manualWork: "40%",
      platforms: "2",
      features: "Analytics + Chatbot"
    },
    achievements: [
      "Constructed 2 web apps: one for citizen feedback and polls, another for admins to analyze data with charts and graphs, reducing manual work by 40%",
      "Integrated a botpress chatbot into the citizen portal for effortless feedback and complaints"
    ],
    tech: [
      { name: "React", icon: SiReact, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "from-black to-gray-800" },
      { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-emerald-500" },
      { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-700" },
      { name: "Botpress", icon: FaRobot, color: "from-purple-500 to-pink-500" },
      { name: "Material UI", icon: SiMaterialdesign, color: "from-blue-600 to-blue-700" }
    ],
    category: "Full-Stack",
    complexity: "Medium",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: "rasyog",
    title: "RasYog WebApp",
    shortTitle: "RASYOG",
    description: "Fashion analytics platform for Indian market insights",
    fullDescription: "A data-driven fashion analytics application that provides comprehensive insights into Indian fashion trends, product categories, and market analysis through interactive visualizations.",
    image: "/src/assets/ashish3.jpg",
    status: "Completed",
    impact: {
      market: "Indian Fashion",
      insights: "Comprehensive",
      visualization: "Interactive"
    },
    achievements: [
      "Developed a fashion analytics web app using React and Flask to analyze Indian fashion data",
      "Delivered insights on product categories, brands, pricing, and sales trends through interactive visualizations"
    ],
    tech: [
      { name: "React", icon: SiReact, color: "from-blue-500 to-cyan-500" },
      { name: "Python", icon: SiPython, color: "from-blue-600 to-yellow-500" },
      { name: "Flask", icon: SiFlask, color: "from-gray-800 to-gray-900" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-500 to-blue-500" }
    ],
    category: "Data Analytics",
    complexity: "Medium",
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    id: "kitty-bees",
    title: "Kitty Bees Website Bot",
    shortTitle: "KITTY BEES",
    description: "E-commerce chatbot for enhanced customer experience",
    fullDescription: "An integrated chatbot solution for an e-commerce platform, providing automated customer support and enhancing the overall shopping experience through intelligent query handling.",
    image: "/src/assets/ashish4.jpg",
    status: "Completed",
    impact: {
      platform: "E-commerce",
      automation: "Customer Support",
      experience: "Enhanced"
    },
    achievements: [
      "Developed the landing page on Shopify and integrated a Botpress-powered chatbot to handle user queries, suggestions, and provide quick responses, enhancing the overall user experience"
    ],
    tech: [
      { name: "Botpress", icon: FaRobot, color: "from-purple-500 to-pink-500" },
      { name: "Shopify", icon: SiShopify, color: "from-green-600 to-green-700" }
    ],
    category: "AI/ML",
    complexity: "Low",
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    id: "dovey-couture",
    title: "Dovey Couture (In Progress)",
    shortTitle: "DOVEY COUTURE",
    description: "Self-hosted e-commerce platform for fashion designer",
    fullDescription: "A comprehensive e-commerce solution being developed from scratch, including backend infrastructure, storefront UI, admin dashboard, and complete shopping functionality for a fashion designer's online store.",
    image: "/src/assets/ashish.jpg",
    status: "In Progress",
    impact: {
      platform: "Self-hosted",
      features: "Complete E-commerce",
      scope: "Full-stack"
    },
    achievements: [
      "Currently developing a self-hosted e-commerce platform for a fashion designer store, including backend, storefront UI, admin dashboard, and shopping features from scratch"
    ],
    tech: [
      { name: "React", icon: SiReact, color: "from-blue-500 to-cyan-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "from-green-500 to-emerald-500" },
      { name: "MongoDB", icon: SiMongodb, color: "from-green-600 to-green-700" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-500 to-blue-500" },
      { name: "Azure", icon: SiMicrosoftazure, color: "from-blue-500 to-blue-600" }
    ],
    category: "E-commerce",
    complexity: "High",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  }
];

// Helper functions for filtering and sorting projects
export const getFeaturedProjects = () => projectsData.filter(project => project.featured);
export const getOtherProjects = () => projectsData.filter(project => !project.featured);
export const getProjectsByCategory = (category) => projectsData.filter(project => project.category === category);
export const getProjectsByStatus = (status) => projectsData.filter(project => project.status === status); 