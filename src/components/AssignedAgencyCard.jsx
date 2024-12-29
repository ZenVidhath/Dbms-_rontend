import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const AssignedAgencyCard = ({ childId }) => {
  const [agencyDetails, setAgencyDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch agency details by child ID
    const fetchAgencyDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/assigned-agencies/child/${childId}`
        );
        const data = response.data[0]; // Assuming single record per child
        setAgencyDetails(data);
      } catch (error) {
        console.error("Error fetching agency details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgencyDetails();
  }, [childId]);

  return (
    <div className="p-4">
      {loading ? (
        <div className="text-center text-gray-500">Loading agency details...</div>
      ) : agencyDetails ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-blue-500"
        >
          {/* Header */}
          <div className="bg-blue-500 text-white p-4">
            <h2 className="text-lg font-semibold">📍 Agency Details</h2>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold">🏢 Agency Name:</span>{" "}
              {agencyDetails.agencyName || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">📍 Location:</span>{" "}
              {agencyDetails.agencyLocation || "N/A"}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">📞 Contact Info:</span>{" "}
              {agencyDetails.contactInfo || "N/A"}
            </p>
            <p
              className={`text-sm font-medium ${
                agencyDetails.assignmentStatus === "Active"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              Status: {agencyDetails.assignmentStatus}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="text-center text-gray-500">No agency assigned.</div>
      )}
    </div>
  );
};

export default AssignedAgencyCard;
