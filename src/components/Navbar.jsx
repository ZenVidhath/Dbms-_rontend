import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showForm, setShowForm] = useState(null); // State to handle form visibility
  const [role, setRole] = useState("public"); // State for role selection
  const [agencyId, setAgencyId] = useState(""); // State for agency ID

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

  const handleFormClose = () => {
    setShowForm(null); // Close the form when clicking outside or on close button
  };

  return (
    <div>
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
                href="#"
                onClick={() => setShowForm(item)}
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

      {/* Modal for Signup or Login */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-violet-500 p-8 rounded-md shadow-lg w-96"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <div className="text-right">
              <button
                onClick={handleFormClose}
                className="text-white font-bold text-xl"
              >
                &times;
              </button>
            </div>
            {showForm === "Login" ? (
              <div>
                <h2 className="text-3xl text-white mb-4 text-center">Login</h2>
                <form>
                  <div className="mb-4">
                    <label className="text-white block mb-2">Username</label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      className="w-full p-2 rounded-md bg-white text-purple-900"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-white block mb-2">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-full p-2 rounded-md bg-white text-purple-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300"
                  >
                    Login
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl text-white mb-4 text-center">Signup</h2>
                <form>
                  <div className="mb-4">
                    <label className="text-white block mb-2">Username</label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      className="w-full p-2 rounded-md bg-white text-purple-900"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-white block mb-2">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-full p-2 rounded-md bg-white text-purple-900"
                    />
                  </div>
                  {/* Role Dropdown */}
                  <div className="mb-4">
                    <label className="text-white block mb-2">Role</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full p-2 rounded-md bg-white text-purple-900"
                    >
                      <option value="public">Public</option>
                      <option value="agency">Agency</option>
                    </select>
                  </div>

                  {/* Agency ID Field (Visible if 'Agency' role is selected) */}
                  {role === "agency" && (
                    <div className="mb-4">
                      <label className="text-white block mb-2">Agency ID</label>
                      <input
                        type="text"
                        placeholder="Enter agency ID"
                        value={agencyId}
                        onChange={(e) => setAgencyId(e.target.value)}
                        className="w-full p-2 rounded-md bg-white text-purple-900"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300"
                  >
                    Signup
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
