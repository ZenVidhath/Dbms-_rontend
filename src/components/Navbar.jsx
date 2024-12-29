import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [showForm, setShowForm] = useState(null); // State to handle form visibility
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("public");
  const [agencyId, setAgencyId] = useState(""); // State for Agency ID
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Hook for navigation

  const handleFormClose = () => {
    setShowForm(null); // Close the form
    setError(null);
    setSuccess(null);
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(null); // Reset errors
    setSuccess(null);

    try {
      const userData = {
        username: username,
        password: password,
        role: role,
        agency_id: role === "agency_staff" ? agencyId || null : null, // Include agency_id only for agency_staff role
      };

      console.log("User Data to Send:", userData); // Log the data for debugging

      const response = await axios.post("http://localhost:5000/api/users", userData, {
        headers: { "Content-Type": "application/json" },
      });
      const userId = response.data.user_id; 

      setSuccess("Signup successful! User has been created.");
      console.log("Server Response:", response.data);

      alert(`Signup successful! Your user ID is ${userId}`);

      // Clear input fields
      setUsername("");
      setPassword("");
      setRole("public");
      setAgencyId("");

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Error during signup:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <motion.nav
        className="bg-purple-800 text-white px-4 py-2 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">SafeHaven DB</div>
          <div className="space-x-6 hidden md:flex">
            {["Home", "About Us", "Login", "Signup"].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setShowForm(item)}
                className="text-white no-underline hover:text-purple-300 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Modal for Signup */}
      {showForm === "Signup" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-violet-500 p-8 rounded-md shadow-lg w-96">
            <button onClick={handleFormClose} className="text-white font-bold text-xl">
              &times;
            </button>
            <h2 className="text-3xl text-white mb-4 text-center">Signup</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label className="text-white block mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full p-2 rounded-md bg-white text-purple-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-white block mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full p-2 rounded-md bg-white text-purple-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="text-white block mb-2">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2 rounded-md bg-white text-purple-900"
                >
                  <option value="public">Public</option>
                  <option value="agency_staff">Agency Staff</option>
                </select>
              </div>
              {role === "agency_staff" && (
                <div className="mb-4">
                  <label className="text-white block mb-2">Agency ID</label>
                  <input
                    type="text"
                    value={agencyId}
                    onChange={(e) => setAgencyId(e.target.value)}
                    placeholder="Enter agency ID"
                    className="w-full p-2 rounded-md bg-white text-purple-900"
                    required
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
