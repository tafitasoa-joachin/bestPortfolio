import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        À propos de moi
      </motion.h2>
      <p className="mt-4 max-w-2xl text-center text-gray-400">
        Je suis un développeur passionné par la création d'expériences web modernes et fonctionnelles.
      </p>
    </section>
  );
};

export default AboutPage;
