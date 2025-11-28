import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import devImage from "../assets/backend-dev.png"; // 🧑‍💻 Replace with your image path

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 px-6 md:px-16 py-20 text-white relative overflow-hidden"
        >
            {/* ===== Left Text Section ===== */}
            <motion.div
                className="flex-1 text-center md:text-left space-y-6 z-10"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                        Shalu Rana
                    </span>
                    <br />
                    <span className="text-4xl md:text-5xl font-semibold text-gray-300">
                        Backend Developer
                    </span>
                </h1>

                <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-lg">
                    I build scalable, secure, and efficient backend systems using
                    <span className="text-cyan-400 font-semibold"> Node.js </span>,
                    <span className="text-blue-400 font-semibold"> Express </span>, and
                    <span className="text-green-400 font-semibold"> MongoDB</span>.
                </p>

                <div className="flex justify-center md:justify-start space-x-4">
                    <a
                        href="#projects"
                        className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                        View Projects <FaArrowRight className="animate-pulse" />
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-800 hover:bg-cyan-600 transition-all duration-300"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                </div>
            </motion.div>

            {/* ===== Right Image Section ===== */}
            <motion.div
                className="flex-1 flex justify-center mt-10 md:mt-0 relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="relative w-72 h-72 md:w-96 md:h-96">

                    <motion.img
                        src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                        alt="Backend Developer"
                        className="w-full h-full object-cover rounded-full border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.6)]"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    />


                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
                </div>
            </motion.div>

            {/* ===== Background Glow Effect ===== */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/30 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-500/20 blur-[150px] rounded-full"></div>
        </section>
    );
};

export default Hero;
