import React from "react";

const HeroExt = () => {
  const skills = [
    { text: "React" },
    { text: "HTML" },
    { text: "CSS" },
    { text: "JavaScript" },
    { text: "Web Development" },
  ];

  return (
    <div className="p-8">
      {/* Skills section */}
      <div className="flex flex-wrap justify-center mt-4 space-x-2">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="bg-gray-200 text-gray-800 py-1 px-4 rounded-full m-2 hover:bg-gray-300 transition duration-300"
          >
            {skill.text}
          </button>
        ))}
      </div>

      {/* About me section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Turning design visions into seamless and responsive web experiences
        </h2>
        <p className="text-lg mt-4 text-white">
          That captivate and engage users across devices.
        </p>
      </div>
    </div>
  );
};

export default HeroExt;
