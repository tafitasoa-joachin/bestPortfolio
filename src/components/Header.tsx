import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-gray-800 dark:bg-gray-900 text-white p-4 px-6 shadow-md z-50 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Logo */}
      <motion.div
        className="text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Portfolio
      </motion.div>

      {/* Icônes */}
      <motion.div
        className="flex space-x-4 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Liens vers les réseaux sociaux */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>

        {/* Bouton Mode Clair/Sombre */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Header;
