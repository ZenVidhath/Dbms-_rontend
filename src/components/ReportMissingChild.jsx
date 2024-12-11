import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReportMissingChild = () => {
  const [childData, setChildData] = useState({
    name: '',
    dob: '',
    description: '',
    last_seen_info: '',
    reported_by: '', // Added reported_by field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChildData({ ...childData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', childData);
    alert('This feature will be enabled after API integration.');
    setChildData({ name: '', dob: '', description: '', last_seen_info: '', reported_by: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Report a Missing Child</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        whileHover={{ scale: 1.02 }}
      >
        <input
          type="text"
          name="name"
          value={childData.name}
          onChange={handleChange}
          placeholder="Child's Name"
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="date"
          name="dob"
          value={childData.dob}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <textarea
          name="description"
          value={childData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="3"
          required
        ></textarea>
        <input
          type="text"
          name="last_seen_info"
          value={childData.last_seen_info}
          onChange={handleChange}
          placeholder="Last Seen Location"
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name="reported_by"
          value={childData.reported_by}
          onChange={handleChange}
          placeholder="Reporter ID"
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          whileHover={{ scale: 1.1 }}
        >
          Submit Report
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ReportMissingChild;
