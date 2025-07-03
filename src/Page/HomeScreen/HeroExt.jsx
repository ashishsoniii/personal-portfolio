

const HeroExt = () => {
  const skills = [
    { text: "React" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "JavaScript" },
    { text: "Web Development" },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Skills section */}
      <div className="flex flex-wrap justify-center mt-2 sm:mt-4 gap-1 sm:gap-2">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="bg-gray-200 text-gray-800 py-1 px-2 sm:px-4 rounded-full m-1 sm:m-2 hover:bg-gray-300 transition duration-300 text-sm sm:text-base"
          >
            {skill.text}
          </button>
        ))}
      </div>

      {/* About me section */}
      <div className="mt-8 sm:mt-12 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">
          Turning design visions into seamless and responsive web experiences
        </h2>
        <p className="text-base sm:text-lg mt-3 sm:mt-4 text-white">
          That captivate and engage users across devices.
        </p>
      </div>
    </div>
  );
};

export default HeroExt;
