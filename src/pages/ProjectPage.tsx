import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projets" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mes Projets
      </motion.h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-bold text-lg">Projet 1</h3>
          <p className="text-gray-400">Description du projet.</p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-bold text-lg">Projet 2</h3>
          <p className="text-gray-400">Description du projet.</p>
        </motion.div>
        {/* Ajoutez d'autres projets ici */}
      </div>
    </section>
  );
};

export default Projects;
