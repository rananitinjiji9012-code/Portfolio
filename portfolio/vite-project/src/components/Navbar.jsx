import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-md border-b border-gray-700">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 cursor-pointer">
        Backend<span className="text-white">Dev</span>
      </h1>

      {/* Nav Links */}
      <ul className="flex space-x-8 text-gray-300 font-medium">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-cyan-400 transition-colors duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
