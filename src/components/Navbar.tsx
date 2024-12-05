// src/components/Navbar.tsx
import { motion } from 'framer-motion';
import { HomeIcon, UserIcon, BriefcaseIcon, MapIcon } from '@heroicons/react/24/outline'; // Heroicons

const Navbar = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 w-full bg-gray-800 text-white border-t-2 border-gray-600 p-2 flex justify-around items-center"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Icônes de navigation */}
      <div className="flex space-x-8">
        <a
          href="#home"
          className="flex flex-col items-center hover:text-gray-400 transition-colors duration-300"
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Accueil</span>
        </a>
        <a
          href="#about"
          className="flex flex-col items-center hover:text-gray-400 transition-colors duration-300"
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-xs">À propos</span>
        </a>
        <a
          href="#projets"
          className="flex flex-col items-center hover:text-gray-400 transition-colors duration-300"
        >
          <BriefcaseIcon className="h-6 w-6" />
          <span className="text-xs">Projets</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center hover:text-gray-400 transition-colors duration-300"
        >
          <MapIcon className="h-6 w-6" />
          <span className="text-xs">Contact</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
