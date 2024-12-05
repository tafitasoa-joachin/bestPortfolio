import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ContactPageez-moi
      </motion.h2>
      <form className="mt-6 w-full max-w-md flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Votre nom"
          className="p-2 bg-gray-700 rounded text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="p-2 bg-gray-700 rounded text-white placeholder-gray-400"
        />
        <textarea
          placeholder="Votre message"
          className="p-2 bg-gray-700 rounded text-white placeholder-gray-400"
          rows={4}
        />
        <motion.button
          type="submit"
          className="p-2 bg-blue-600 rounded text-white hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
        >
          Envoyer
        </motion.button>
      </form>
    </section>
  );
};

export default ContactPage;
