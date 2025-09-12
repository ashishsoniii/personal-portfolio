export const workExperienceData = [
  {
    id: "clearfeed",
    company: "ClearFeed",
    position: "Member of Technical Staff",
    location: "Bangalore, India",
    duration: "Nov 2024 - Present",
    logo: "🚀",
    color: "from-purple-600 to-pink-600",
    gradient: "from-purple-600 via-pink-500 to-red-500",
    shortDescription:
      "Built core product experiences across webapp, portal, and webchat; shipped 100+ improvements at startup pace using AI-first workflows.",
    achievements: [
      "Contributed to ClearFeed’s core product that makes enterprise support as seamless as chatting—working across the main webapp, customer portal, and a new webchat widget.",
      "Shipped 100+ features and improvements in ~6 weeks, including dark mode, passwordless login (magic links), business schedules & SLA policies, and onboarding UX upgrades.",
      "Improved frontend performance with component refactors, memoization, and caching—reducing page load time by ~40% and boosting responsiveness across the platform.",
      "Authored 200+ PRs and reviewed 70+ PRs, becoming one of the top committers while ensuring code quality, logic correctness, and adherence to engineering guidelines.",
      "Adopted an AI-first workflow using Cursor, MCP agents, and the Cubic AI reviewer to accelerate delivery, improve debugging accuracy, and maintain high-quality output under tight timelines.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "TailwindCSS",
      "Cursor",
      "Slack",
      "Ant Design",
      "MCP agents",
      "Cubic AI Reviewer",
      "GitHub",
    ],
    metrics: [
      { label: "Features Shipped", value: "100+", icon: "⚡" },
      { label: "PRs Merged", value: "200+", icon: "🔀" },
      { label: "PRs Reviewed", value: "70+", icon: "👀" },
      { label: "Performance Improvement", value: "40%", icon: "🚀" },
    ],
    keyProjects: [
      {
        name: "Dark Mode System",
        description:
          "Comprehensive theme system applied across the app with consistent tokens and accessibility.",
        impact:
          "Improved UX and readability in low-light; increased session duration.",
        tech: ["React", "CSS", "Design Tokens"],
      },
      {
        name: "Passwordless Authentication",
        description:
          "Magic-link based login for frictionless and secure access.",
        impact: "Reduced login friction and improved onboarding conversion.",
        tech: ["Node.js", "JWT", "Email Service"],
      },
      {
        name: "Business Schedules & SLAs",
        description:
          "Configurable schedules, holidays, and SLA policies integrated into support workflows.",
        impact:
          "Greater operational reliability and clearer customer expectations.",
        tech: ["React", "Node.js"],
      },
      {
        name: "Performance Optimization",
        description: "Refactoring, memoization, and caching at hot paths.",
        impact: "~40% faster load times and snappier interactions.",
        tech: ["React.memo", "useMemo", "useCallback"],
      },
      {
        name: "Brand-Customizable Webchat",
        description:
          "Drag-positionable widget with brand theming, logo/colors, and improved input ergonomics (Shift+Enter).",
        impact: "Consistent brand experience and higher conversation starts.",
        tech: ["React", "CSS"],
      },
    ],
    challenges: [
      "Shipping at startup velocity while safeguarding performance and reliability.",
      "Coordinating cross-surface changes across webapp, portal, and webchat.",
      "Embedding AI tools responsibly into day-to-day development.",
    ],
    learnings: [
      "AI-assisted, test-conscious development for faster iteration without quality loss.",
      "Scalable UI architecture and performance tuning in production.",
      "Effective PR review habits for team velocity and code health.",
    ],
    companyInfo: {
      industry: "Customer Support Software",
      size: "50-100 employees",
      funding: "Series A",
      description:
        "ClearFeed is revolutionizing customer support by making it as easy and fast as chatting.",
    },
  },
  {
    id: "gap-inc",
    company: "GAP INC.",
    position: "iOS Developer Intern",
    location: "Hyderabad, India",
    duration: "July 2024 - Aug 2024",
    logo: "🍎",
    color: "from-blue-600 to-cyan-600",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
    shortDescription:
      "Developed 10+ reusable SwiftUI components for Gap's Old Navy app",
    achievements: [
      "Developed 10+ reusable SwiftUI components for Gap's Old Navy app, significantly improving user experience, interface consistency, and code maintainability",
    ],
    tech: ["SwiftUI", "iOS", "Xcode", "Git"],
    metrics: [
      { label: "Components Built", value: "10+", icon: "🧩" },
      { label: "Code Reusability", value: "85%", icon: "♻️" },
      { label: "Performance Gain", value: "30%", icon: "⚡" },
      { label: "User Experience", value: "Enhanced", icon: "✨" },
    ],
    keyProjects: [
      {
        name: "Reusable UI Component Library",
        description:
          "Created a comprehensive library of SwiftUI components for the Old Navy app",
        impact: "Improved development speed and UI consistency across the app",
        tech: ["SwiftUI", "Combine", "Core Data"],
      },
    ],
    challenges: [
      "Learning SwiftUI framework from scratch",
      "Ensuring components work across different iOS versions",
      "Maintaining design consistency with brand guidelines",
    ],
    learnings: [
      "Modern iOS development with SwiftUI",
      "Component-driven development approach",
      "Enterprise app development practices",
    ],
    companyInfo: {
      industry: "Retail & Fashion",
      size: "100,000+ employees",
      revenue: "$16.6B",
      description:
        "Gap Inc. is a global retailer offering clothing, accessories, and personal care products.",
    },
  },
  {
    id: "gsoc-2023",
    company: "Google Summer of Code 23",
    position: "Open Source Developer @ The Tor Project",
    location: "Winchester, Massachusetts (Remote)",
    duration: "Jun 2023 - Sep 2023",
    logo: "🌐",
    color: "from-orange-600 to-red-600",
    gradient: "from-orange-600 via-red-500 to-pink-500",
    shortDescription:
      "Translated Figma designs into responsive UI, boosting user engagement by 40%",
    achievements: [
      "Translated Figma designs into a responsive, pixel-perfect UI, boosting user engagement by 40% and reducing bounce rate by 25% within 5 months",
      "Implemented the website using Lektor CMS, cutting content update and maintenance time",
      "Used HTML, CSS, and Bootstrap to build a clean, accessible, & performance-optimized UI",
      "Collaborated with global contributors on GitLab to maintain code quality and align UI implementation with The Tor Project's design and privacy guidelines",
    ],
    tech: ["HTML", "CSS", "Bootstrap", "Lektor CMS", "GitLab"],
    metrics: [
      { label: "User Engagement", value: "+40%", icon: "📈" },
      { label: "Bounce Rate", value: "-25%", icon: "📉" },
      { label: "Global Contributors", value: "15+", icon: "🌍" },
      { label: "Accessibility Score", value: "98%", icon: "♿" },
    ],
    keyProjects: [
      {
        name: "Responsive Website Redesign",
        description:
          "Complete redesign of The Tor Project's main website with modern UI/UX",
        impact:
          "40% increase in user engagement and 25% reduction in bounce rate",
        tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
      },
      {
        name: "Lektor CMS Integration",
        description:
          "Implemented content management system for easy website maintenance",
        impact: "Reduced content update time by 60%",
        tech: ["Lektor CMS", "Python", "Markdown"],
      },
      {
        name: "Accessibility Implementation",
        description:
          "Ensured website meets WCAG 2.1 AA standards for accessibility",
        impact:
          "98% accessibility score and improved user experience for all users",
        tech: ["ARIA", "Semantic HTML", "Keyboard Navigation"],
      },
    ],
    challenges: [
      "Working with global team across different time zones",
      "Implementing privacy-focused design principles",
      "Ensuring accessibility compliance for diverse user base",
    ],
    learnings: [
      "Open source development practices",
      "Privacy-focused web development",
      "Global collaboration and communication",
    ],
    companyInfo: {
      industry: "Privacy & Security",
      organization: "The Tor Project",
      mission:
        "Advancing human rights and freedoms by creating and deploying free and open source anonymity and privacy technologies",
      description:
        "The Tor Project develops free and open source software for anonymous communication.",
    },
  },
  {
    id: "c4gt",
    company: "Code for GovTech (C4GT) 24",
    position: "Full Stack Intern @ MeitY",
    location: "Delhi, India (Remote)",
    duration: "Jun 2024 - Oct 2024",
    logo: "🏛️",
    color: "from-green-600 to-emerald-600",
    gradient: "from-green-600 via-emerald-500 to-teal-500",
    shortDescription:
      "Built an open sourced custom CMS for the iGOT platform supporting 22 languages",
    achievements: [
      "Built an open sourced custom CMS for the iGOT platform supporting 22 languages, enabling SPVs to manage multilingual content dynamically",
    ],
    tech: ["Full Stack", "CMS", "Multilingual", "Open Source"],
    metrics: [
      { label: "Languages Supported", value: "22", icon: "🌍" },
      { label: "Open Source", value: "100%", icon: "📖" },
      { label: "Government Impact", value: "High", icon: "🏛️" },
      { label: "Content Management", value: "Dynamic", icon: "⚙️" },
    ],
    keyProjects: [
      {
        name: "Multilingual CMS Platform",
        description:
          "Developed a custom content management system for government training platform",
        impact:
          "Enabled seamless content management in 22 languages for government officials",
        tech: ["React", "Node.js", "MongoDB", "i18n"],
      },
    ],
    challenges: [
      "Implementing multilingual support for complex government content",
      "Ensuring accessibility and compliance with government standards",
      "Building scalable architecture for large user base",
    ],
    learnings: [
      "Government technology development",
      "Multilingual application architecture",
      "Open source contribution to public sector",
    ],
    companyInfo: {
      industry: "Government Technology",
      organization: "Ministry of Electronics and IT",
      impact: "National Level",
      description:
        "C4GT is an initiative to build open source solutions for government technology challenges.",
    },
  },
  {
    id: "yoglabs",
    company: "YogLabs",
    position: "Frontend Developer (Part Time)",
    location: "Jaipur, Rajasthan (Remote)",
    duration: "Jan 2023 - Jun 2023",
    logo: "⚡",
    color: "from-indigo-600 to-purple-600",
    gradient: "from-indigo-600 via-purple-500 to-pink-500",
    shortDescription:
      "Enhanced 3 pre-built dashboards and built Flask backend integration",
    achievements: [
      "Enhanced 3 pre-built dashboards by fixing 10+ critical bugs and adding 4+ key features to improve usability and performance",
      "Built and integrated a Flask backend, improving functionality and user data management",
      "Developed CI/CD pipelines and deployed 4 projects on AWS S3",
    ],
    tech: ["Frontend", "Flask", "AWS S3", "CI/CD"],
    metrics: [
      { label: "Dashboards Enhanced", value: "3", icon: "📊" },
      { label: "Bugs Fixed", value: "10+", icon: "🐛" },
      { label: "Features Added", value: "4+", icon: "✨" },
      { label: "Projects Deployed", value: "4", icon: "🚀" },
    ],
    keyProjects: [
      {
        name: "Dashboard Enhancement Suite",
        description:
          "Improved three existing dashboards with new features and bug fixes",
        impact:
          "Enhanced user experience and improved performance across all dashboards",
        tech: ["React", "JavaScript", "CSS", "Chart.js"],
      },
      {
        name: "Flask Backend Integration",
        description:
          "Built and integrated Flask backend for improved data management",
        impact:
          "Streamlined data operations and improved application functionality",
        tech: ["Flask", "Python", "SQLAlchemy", "REST API"],
      },
      {
        name: "CI/CD Pipeline Development",
        description: "Created automated deployment pipelines for AWS S3",
        impact: "Reduced deployment time and improved development workflow",
        tech: ["GitHub Actions", "AWS S3", "Docker", "Automation"],
      },
    ],
    challenges: [
      "Working with legacy code and improving existing systems",
      "Integrating frontend and backend systems seamlessly",
      "Setting up reliable CI/CD pipelines for multiple projects",
    ],
    learnings: [
      "Full-stack development with Python and JavaScript",
      "Cloud deployment and CI/CD practices",
      "Legacy system maintenance and improvement",
    ],
    companyInfo: {
      industry: "Software Development",
      size: "10-50 employees",
      focus: "Dashboard Solutions",
      description:
        "YogLabs specializes in creating powerful dashboard solutions for data visualization and business intelligence.",
    },
  },
];

export const getExperienceById = (id) => {
  return workExperienceData.find((exp) => exp.id === id);
};
