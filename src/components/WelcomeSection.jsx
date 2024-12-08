import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="bg-white text-center py-16 px-4"
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-5xl font-extrabold text-purple-800 mb-4">
        Welcome to <span className="text-yellow-500">SafeHaven DB</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
        SafeHaven DB is a secure and innovative platform dedicated to assisting families 
        in reuniting with their loved ones. By leveraging cutting-edge technology and collaboration 
        with trusted agencies, we aim to make the world a safer place for children.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <motion.a
          href="#aboutus"
          className="bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700"
          variants={buttonVariants}
          whileHover="hover"
        >
          Learn More
        </motion.a>
        <motion.a
          href="#reportmissingchild"
          className="bg-yellow-500 text-purple-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-400"
          variants={buttonVariants}
          whileHover="hover"
        >
          Report Missing Child
        </motion.a>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;
