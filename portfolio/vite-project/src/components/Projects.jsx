import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Task Manager API",
    desc: "A Node.js and Express-based REST API for managing users and tasks with JWT authentication.",
    tech: "Node.js, Express, MongoDB, JWT",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "E-Commerce Backend",
    desc: "Backend service that supports cart, orders, payments, and admin dashboard using REST APIs.",
    tech: "Node.js, Express, MySQL, Stripe",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Blog REST API",
    desc: "RESTful API for blog management with CRUD operations, user auth, and image upload support.",
    tech: "Node.js, Express, MongoDB, Cloudinary",
    github: "https://github.com/",
    live: "#",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6 text-center"
  >
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-12">
      Featured Projects
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="bg-gray-800/60 hover:bg-gray-700/70 rounded-2xl p-6 text-left shadow-lg shadow-cyan-900/20 hover:shadow-cyan-400/30 transition-all duration-300 transform hover:-translate-y-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-3">{project.desc}</p>
          <p className="text-sm text-cyan-400 mb-4 font-medium">{project.tech}</p>
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all"
            >
              <FaGithub /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all"
            >
              <FaExternalLinkAlt /> Live
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
