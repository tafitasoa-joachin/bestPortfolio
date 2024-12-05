import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const HomePage = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: any;

    if (vantaRef.current) {
      try {
        console.log('Initialisation de Vanta.js...');
        vantaEffect = window.VANTA.BIRDS({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: 0x7d1515,
          birdSize: 0.9,
          wingSpan: 10.0,
          separation: 76.0,
          alignment: 40.0,
          cohesion: 31.0,
        });
        console.log('Vanta.js initialisé avec succès.');
      } catch (error) {
        console.error('Erreur lors de l’initialisation de Vanta.js :', error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="h-screen w-full flex justify-center items-center text-white"
      id="home"
    >
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl justify-between items-center px-6 space-y-8 md:space-y-0 md:space-x-8">
        {/* Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <div className="relative">
            {/* Conteneur décoratif autour de l'image */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl"></div>
            {/* Image stylisée */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="image"
              className="relative rounded-full border-4 border-white shadow-lg w-40 h-40 sm:w-60 sm:h-60 object-cover"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="flex flex-col justify-center items-start text-white space-y-4 w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Transforming ideas into{' '}
            <span className="text-blue-500">digital reality</span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Découvrez mes projets et expériences.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
