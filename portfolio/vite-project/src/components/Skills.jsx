import React from "react";
import { FaNodeJs, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiJsonwebtokens } from "react-icons/si";

const skills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-yellow-400 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400 text-4xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" /> },
  { name: "REST API", icon: <FaDatabase className="text-pink-400 text-4xl" /> },
];

const Skills = () => (
  <section
    id="skills"
    className="relative bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6 text-center"
  >
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-12">
      Technical Expertise
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group bg-gray-800/60 hover:bg-gray-700/70 rounded-2xl p-6 shadow-md shadow-cyan-900/20 hover:shadow-cyan-400/40 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <p className="text-gray-300 font-semibold group-hover:text-cyan-400 transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
  </section>
);

export default Skills;
