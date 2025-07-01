import React from "react";
import { motion } from "framer-motion";
import PhotoRound from "./components/PhotoRound";

function HomePage() {


  return (
    <div className="bg-black text-white flex p-10">
    {/* bg-[#d0d0fa] */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-indigo-200 text-black p-8 rounded-[4rem] shadow-md w-full l">
        <div className="md:w-2/3">
          <h1 className="text-7xl font-bold">Ashish Soni</h1>
          <p className="text-xl mt-4">Building modern, mobile-first websites that make a lasting impression!</p>
          <div className="mt-4">
            <button className="bg-black text-white font-semibold py-2 px-4 rounded-full">Web Developer</button>
          </div>
          {/* <div className="flex flex-wrap mt-4 space-x-2">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full mt-2"
              >
                {skill.text}
              </button>
            ))}
          </div> */}
        </div>
        <div className="md:w-1/3 flex justify-center">
          <PhotoRound />
        </div>
      </div>

      {/* <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">Turning design visions into seamless and responsive web experiences</h2>
        <p className="text-lg mt-4">That captivate and engage users across devices.</p>
      </div> */}
    </div>
  );
}

export default HomePage;
