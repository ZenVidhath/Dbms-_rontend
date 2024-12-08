import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
        {/* Card 1 */}
        <motion.div
          className="relative group overflow-hidden shadow-md rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="images/slide1.jpg"
            alt="Smiling Children"
            className="w-full h-48 object-cover"
          />
          <div
            className="absolute bottom-0 left-0 w-full bg-purple-800 text-white text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-2 text-sm">To create a safer and brighter future for every child.</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative group overflow-hidden shadow-md rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="images/slide2.webp"
            alt="Happy Children on Grass"
            className="w-full h-48 object-cover"
          />
          <div
            className="absolute bottom-0 left-0 w-full bg-purple-800 text-white text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-2 text-sm">To empower communities and bring smiles to children.</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative group overflow-hidden shadow-md rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src="images/slide3.jpg"
            alt="Child Learning in School"
            className="w-full h-48 object-cover"
          />
          <div
            className="absolute bottom-0 left-0 w-full bg-purple-800 text-white text-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold">Join Us</h3>
            <p className="mt-2 text-sm">Be a part of the change and help us make a difference.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
