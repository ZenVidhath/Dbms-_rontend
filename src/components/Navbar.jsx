import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <motion.nav
      className="bg-purple-800 text-white px-4 py-2 shadow-lg"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar Title */}
        <motion.div
          className="text-2xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SafeHaven DB
        </motion.div>

        {/* Navbar Links */}
        <div className="space-x-6 hidden md:flex">
          {["Home", "About Us", "Login", "Signup"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="text-white no-underline hover:text-purple-300 transition duration-300"
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;