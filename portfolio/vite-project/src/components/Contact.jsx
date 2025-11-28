import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 py-24 px-6 text-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-600/20 to-blue-600/20 blur-3xl"></div>

      <motion.div
        className="relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-8">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {/* Contact Form */}
        <form
          className="bg-gray-800/60 p-6 rounded-2xl shadow-lg shadow-cyan-900/20 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md shadow-cyan-500/30 hover:shadow-cyan-400/40 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="mailto:yourmail@example.com"
            className="text-gray-300 hover:text-cyan-400 transition-all"
          >
            <FaEnvelope size={26} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-all"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
