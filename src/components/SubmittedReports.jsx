import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const SubmittedReports = () => {
  const userIdentifier = 'User123'; // Example logged-in user's identifier
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // Assuming an API endpoint like `/api/children?reported_by=userIdentifier`
        const response = await axios.get(`/api/children/reported_by/${userIdentifier}`);
        setReports(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching reports:', err);
        setError('Failed to fetch reports.');
        setLoading(false);
      }
    };

    fetchReports();
  }, [userIdentifier]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-gray-100 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Your Submitted Reports</h2>
        <p>Loading...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-red-100 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Your Submitted Reports</h2>
        <p className="text-red-500">{error}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Your Submitted Reports</h2>
      <ul className="space-y-4">
        {reports.length > 0 ? (
          reports.map((report) => (
            <motion.li
              key={report.id}
              className="p-4 border border-gray-300 rounded-md"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-bold">{report.name}</h3>
              <p>Date of Birth: {report.dob}</p>
              <p>Description: {report.description}</p>
              <p>Last Seen Info: {report.last_seen_info}</p>
              <p>Reported By: {report.reported_by}</p>
            </motion.li>
          ))
        ) : (
          <p className="text-gray-500">No reports found.</p>
        )}
      </ul>
    </motion.div>
  );
};

export default SubmittedReports;
